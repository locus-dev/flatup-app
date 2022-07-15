import { useState } from "react";
import CadastroEndereco from "../../../components/cadastroEndereco/CadastroEndereco";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./CadastrarImovel.css";
import axios from "axios";
import config from "../../../config";
import { useLocation } from "react-router-dom";

const CadastrarImovel = (props) => {
	const [payload, setPayload] = useState({
		areaLazer: true,
		areaM2: 0,
		climatizado: "string",
		idEnderecoFK: 0,
		idImovel: 0,
		piscina: true,
		quantQuarto: 0,
		quantSuite: 0,
		statusOcupacao: "string",
	});
	const [token, setToken] = useState({});

	const location = useLocation();

	function rodarCarrossel(sentido) {}

	return (
		<div className="componente">
			<Navbar />
			<form className="form-carrossel">
				<div className="" id="slide-1">
					<h2>Endereço</h2>
					{/* TODO => Fazer os inputs dentro do componente "CadastroEndereco" passarem seus values para a const payload que será um objeto JSON */}
					<CadastroEndereco />
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
								name=""
								onChange={(e) => setPayload(e.target.value)}
							/>
						</div>

						<div className="form-control">
							<label>Número de quartos</label>
							<input className="input" type="text" name="" />
						</div>

						<div className="form-control">
							<label>Número de suites</label>
							<input className="input" type="text" name="" />
						</div>

						<div className="form-control">
							<label>Climatizado</label>
							<div>
								<input
									className="input checkbox"
									type="radio"
									name="climatizado"
								/>
								<span>Sim</span>
							</div>
							<div>
								<input
									className="input checkbox"
									type="radio"
									name="climatizado"
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
									name="area-lazer"
								/>
								<span>Sim</span>
							</div>
							<div>
								<input
									className="input checkbox"
									type="radio"
									name="area-lazer"
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
								/>
								<span>Sim</span>
							</div>
							<div>
								<input
									className="input checkbox"
									type="radio"
									name="piscina"
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
						<span
							className="button form-button"
							id="enviar"
							onClick={() =>
								axios
									.post(config.URL + "/imovel/salvar", {
										headers: {
											Authorization:
												"Bearer " +
												location.state.token,
										},
										data: payload,
									})
									.then()
							}
						>
							Enviar
						</span>
					</div>
				</div>
			</form>
			<Footer />
		</div>
	);
};

export default CadastrarImovel;
