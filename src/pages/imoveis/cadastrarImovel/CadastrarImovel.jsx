import axios from "axios";
import { useContext, useState } from "react";
import CadastroEndereco from "../../../components/endereco/CadastroEndereco";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./CadastrarImovel.css";
import { useNavigate } from "react-router-dom";
import FlatUpContext from "../../../components/context/FlatUpContext";

const CadastrarImovel = () => {
	const [token, setToken] = useState({});

	const [payload, setPayload] = useState({
		areaLazer: true,
		areaM2: 0,
		climatizado: "string",
		idEnderecoFK: 1,
		idImovel: null,
		piscina: true,
		quantQuarto: 0,
		quantSuite: 0,
		statusOcupacao: "DESOCUPADO",
	});

	const modelo = {
		areaLazer: true,
		areaM2: 240,
		climatizado: "CLIMATIZADO",
		idEnderecoFK: 1,
		idImovel: 1,
		piscina: true,
		quantQuarto: 2,
		quantSuite: 2,
		statusOcupacao: "DESOCUPADO",
	};

	function postImovel() {
		axios
			.post(
				process.env.REACT_APP_API_URL + "/imovel/salvar",
				{
					areaLazer: payload.areaLazer,
					areaM2: payload.areaM2,
					climatizado: payload.climatizado,
					idEnderecoFK: 1,
					piscina: payload.piscina,
					quantQuarto: payload.quantQuarto,
					quantSuite: payload.quantSuite,
					statusOcupacao: payload.statusOcupacao,
				},
				{
					headers: {
						Authorization: `Bearer ${userData.userToken}`,
					},
				}
			)
			.then((resposta) => {
				// navigate(`/imoveis/${resposta.id}`, {
				navigate('/imoveis/1', {
					state: {
						token: userData.userToken,
						id: 1,
					},
				});
			})
			.catch((error) => {
				navigate("/imoveis");
				console.log(error);
			});
	}

	const navigate = useNavigate();

	const [userData, setUserData] = useContext(FlatUpContext);

	function rodarCarrossel(sentido) {}

	return (
		<div className="componente">
			<Navbar />
			<form className="form-carrossel">
				<div className="" id="slide-1">
					<h2>Endereço</h2>
					{/* TODO => Fazer os inputs dentro do componente "CadastroEndereco" passarem seus values para a const payload que será um objeto JSON */}
					<CadastroEndereco props={payload} />
					<button
						id="seguir"
						className="button form-button"
						type="button"
						onClick={function () {
							document.getElementById("slide-1").style.display =
								"none";
							document.getElementById("slide-2").style.display =
								"flex";
						}}
					>
						Seguir
					</button>
				</div>

				<div className="" id="slide-2">
					<h2>Informações adicionais</h2>
					<div className="form-body">
						<div className="form-control">
							<label>Tamanho em m²</label>
							<input
								className="input"
								type="text"
								name="areaM2"
								onChange={(e) => {
									payload.areaM2 = Number(e.target.value);
								}}
							/>
						</div>

						<div className="form-control">
							<label>Número de quartos</label>
							<input
								className="input"
								type="text"
								name="quantQuarto"
								onChange={(e) => {
									payload.quantQuarto = Number(
										e.target.value
									);
								}}
							/>
						</div>

						<div className="form-control">
							<label>Número de suites</label>
							<input
								className="input"
								type="text"
								name="quantSuite"
								onChange={(e) => {
									payload.quantSuite = Number(e.target.value);
								}}
							/>
						</div>

						<div className="form-control">
							<label>Climatizado</label>
							<div>
								<input
									className="input checkbox"
									type="radio"
									name="climatizado"
									value="CLIMATIZADO"
									onChange={(e) => {
										payload.climatizado = e.target.value;
									}}
								/>
								<span>Sim</span>
							</div>
							<div>
								<input
									className="input checkbox"
									type="radio"
									name="climatizado"
									value="NAO_CLIMATIZADO"
									onChange={(e) => {
										payload.climatizado = e.target.value;
									}}
								/>
								<span>Não</span>
							</div>
						</div>

						<div className="form-control">
							<label>Possui área de lazer?</label>
							<div>
								<input
									className="input checkbox"
									type="radio"
									name="areaLazer"
									value={true}
									onChange={(e) => {
										payload.areaLazer =
											e.target.value === "true"
												? true
												: false;
									}}
								/>
								<span>Sim</span>
							</div>
							<div>
								<input
									className="input checkbox"
									type="radio"
									name="areaLazer"
									value={false}
									onChange={(e) => {
										payload.areaLazer =
											e.target.value === "false"
												? false
												: true;
									}}
								/>
								<span>Não</span>
							</div>
						</div>

						<div className="form-control">
							<label>Piscina</label>
							<div>
								<input
									className="input checkbox"
									type="radio"
									name="piscina"
									value={true}
									onChange={(e) => {
										payload.piscina =
											e.target.value === "true"
												? true
												: false;
									}}
								/>
								<span>Sim</span>
							</div>
							<div>
								<input
									className="input checkbox"
									type="radio"
									name="piscina"
									value={false}
									onChange={(e) => {
										console.log(
											e.target.value === "false"
												? false
												: true
										);
										console.log(typeof e.target.value);
										console.log(e.target.value);
										payload.piscina =
											e.target.value === "false"
												? false
												: true;
									}}
								/>
								<span>Não</span>
							</div>
						</div>
					</div>

					<div className="form-footer">
						<button
							className="button form-button"
							type="button"
							onClick={function () {
								document.getElementById(
									"slide-2"
								).style.display = "none";
								document.getElementById(
									"slide-1"
								).style.display = "flex";
							}}
						>
							Voltar
						</button>
						<button
							type="button"
							className="button form-button"
							id="enviar"
							onClick={postImovel}
						>
							Enviar
						</button>
					</div>
				</div>
			</form>
			<Footer />
		</div>
	);
};

export default CadastrarImovel;
