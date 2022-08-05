import "../newHotel.scss";


import axios from "axios";
import { useContext, useState } from "react";


import Navbar from "../../../components/navbar/Navbar";

import { useNavigate, useLocation } from "react-router-dom";
import FlatUpContext from "../../../context/FlatUpContext";
import FormAddress from "../../newAddress/formAddress/FormAddress";


const FormHotel = () => {
	const [payload, setPayload] = useState({
		areaLazer: true,
		areaM2: 0,
		climatizado: "string",
		idEnderecoFK: null,
		idImovel: 0,
		piscina: true,
		quantQuarto: 0,
		quantSuite: 0,
		statusOcupacao: "string",
	});


	// const location = useLocation();
	const navigate = useNavigate();

	const location = useLocation();
	location.state = location.state ? location.state : {};

	const [userData, setUserData] = useContext(FlatUpContext);


	function rodarCarrossel(sentido) { }

	return (
		<>
			<div className="bottom">
				<div className="right">
					<form className="form-carrossel">
						<div className="formInput">
							<div className="form-control">
								<h2>Informações adicionais</h2>

								<div className="form-control">
									<label>Tamanho em m²</label>
									<input
										className="input"
										type="text"
										name=""
										onChange={(e) => {
											payload.areaM2 = e.target.value;
										}}
									/>
								</div>

								<div className="form-control">
									<label>Número de quartos</label>
									<input
										className="input"
										type="text"
										name=""
										onChange={(e) => {
											payload.quantQuarto = e.target.value;
										}}
									/>
								</div>

								<div className="form-control">
									<label>Número de suites</label>
									<input
										className="input"
										type="text"
										name=""
										onChange={(e) => {
											payload.quantSuite = e.target.value;
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
											value="SIM"
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
											value="NAO"
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
											name="area-lazer"
											value={true}
											onChange={(e) => {
												payload.areaLazer = e.target.value;
											}}
										/>
										<span>Sim</span>
									</div>
									<div>
										<input
											className="input checkbox"
											type="radio"
											name="area-lazer"
											value={false}
											onChange={(e) => {
												payload.areaLazer = e.target.value;
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
												payload.piscina = e.target.value;
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
												payload.piscina = e.target.value;
											}}
										/>
										<span>Não</span>
									</div>
								</div>
							</div>
							<FormAddress />
							<div className="form-footer">

								<button
									className="botaoSalvar"
									id="enviar"
									onClick={() =>
										axios.post(process.env.REACT_APP_API_URL + `/imovel/salvar`, {
											areaLazer: payload.areaLazer,
											areaM2: payload.areaM2,
											climatizado: payload.climatizado,
											idEnderecoFK: payload.idEnderecoFK,
											idImovel: payload.idImovel,
											piscina: payload.piscina,
											quantQuarto: payload.quantQuarto,
											quantSuite: payload.quantSuite,
											statusOcupacao: payload.statusOcupacao,
										}.catch((e) => {
											console.log('nao funfou'+ e)
										})

										)}
										
									

								>
									Enviar
								</button>
								<button className="botaoCancelar" onClick={() => navigate("/hotels")}>Cancelar</button>
							</div>
						</div>

					</form>

				</div>
			</div >
		</>
	);
}


export default FormHotel;