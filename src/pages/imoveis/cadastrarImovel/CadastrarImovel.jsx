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
		tituloAnuncio: "",
		descricao: ""
	});


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

	<main>
		<Navbar />
		<div className="container">
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
						}}>Seguir</button>
				</div>

				<div className="container" id="slide-2">
					<h2>Informações adicionais</h2>
					<div className="form-group">
							<label className="exampleInputEmail1">Título do Anúncio</label>
							<input
								className="form-control"
								type="text"
								name="tituloAnuncio"
								onChange={(e) => {
									payload.tituloAnuncio = String(e.target.value);
								}}
							/>
						</div>

						<div className="form-group">
							<label className="exampleInputEmail1">Descrição do Anúncio</label>
							<input
								className="form-control"
								type="text"
								name="descricao"
								onChange={(e) => {
									payload.descricao = String(e.target.value);
								}}
							/>
						</div>

						<div className="form-group">
							<label className="exampleInputEmail1">Tamanho em m²</label>
							<input
								className="form-control"
								type="text"
								name="areaM2"
								onChange={(e) => {
									payload.areaM2 = Number(e.target.value);
								}}
							/>
						</div>

						<div className="form-group">
							<label className="exampleInputEmail1">Número de quartos</label>
							<input
								className="form-control"
								type="text"
								name="quantQuarto"
								onChange={(e) => {
									payload.quantQuarto = Number(
										e.target.value
									);
								}}
							/>
						</div>

						<div className="form-group">
							<label className="exampleInputEmail1">Número de suites</label>
							<input
								className="form-control"
								type="text"
								name="quantSuite"
								onChange={(e) => {
									payload.quantSuite = Number(e.target.value);
								}}
							/>
						</div>

						<div className="form-group">
							<label className="exampleInputEmail1">Climatizado</label>
							<div>
								<input
									className="form-control"
									type="radio"
									name="climatizado"
									value="CLIMATIZADO"
									onChange={(e) => {
										payload.climatizado = e.target.value;
									}}
								/>
								<span className="exampleInputEmail1">Sim</span>
							</div>
							<div className="form-group">
								<input
									className="form-control"
									type="radio"
									name="climatizado"
									value="NAO_CLIMATIZADO"
									onChange={(e) => {
										payload.climatizado = e.target.value;
									}}
								/>
								<span className="exampleInputEmail1">Não</span>
							</div>
						</div>

						<div className="form-group">
							<label className="exampleInputEmail1">Possui área de lazer?</label>
							<div>
								<input
									// className="form-control"
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
								<span className="exampleInputEmail1">Sim</span>
							</div>
							<div className="form-group">
								<input
									// className="form-control"
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
								<span className="exampleInputEmail1">Não</span>
							</div>
						</div>

						<div className="form-group">
							<label className="exampleInputEmail1">Piscina</label>
							<div>
								<input
									// className="form-control"
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
								<span className="exampleInputEmail1">Sim</span>
							</div>
							<div className="form-group">
								<input
									// className="form-control"
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
								<span className="exampleInputEmail1">Não</span>
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
	</main>
	);
};

export default CadastrarImovel;
