import axios from "axios";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import CadastroEndereco from "../../../components/cadastroEndereco/CadastroEndereco";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import config from "../../../config";
import "./CadastrarImovel.css";
import { useNavigate } from "react-router-dom";
import { ContextoUsuario } from "../../../App";
import Mapa from "../../../components/mapa/Mapa";

const CadastrarImovel = () => {
	const [payload, setPayload] = useState({
		areaLazer: true,
		areaM2: 0,
		climatizado: "string",
		idEnderecoFK: null,
		idImovel: null,
		piscina: true,
		quantQuarto: 0,
		quantSuite: 0,
		statusOcupacao: "DESOCUPADO",
	});
	const [token, setToken] = useState({});

	// const location = useLocation();
	const navigate = useNavigate();

	const contexto = useContext(ContextoUsuario);


	function rodarCarrossel(sentido) {}

	return (
		<div className="componente">
			<Navbar/>
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
									payload.quantQuarto = Number(e.target.value);
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
										payload.areaLazer = (e.target.value === "true" ? true : false);
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
										payload.areaLazer = (e.target.value === "false" ? false : true);
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
										payload.piscina = (e.target.value === "true" ? true : false);
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

										console.log((e.target.value === "false" ? false : true))
										console.log(typeof(e.target.value))
										console.log(e.target.value)
										payload.piscina = (e.target.value === "false" ? false : true);
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
							onClick={() =>
								axios
									.post(config.URL + "/imovel/salvar", {
										headers: {
											Authorization:
												"Bearer " +
												contexto.token,
										},
										data: payload,
									})
									.then((resposta) => {
										navigate(`/imoveis/${resposta.id}`, {
											state: {
												token: contexto.token,
											},
										});
									}).catch((error) => {
										console.log(error);
									})
							}
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
