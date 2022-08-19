import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	CardText,
	Card,
} from "reactstrap";
import Mapa from "../../../components/mapa/Mapa";
import { Form } from "react-bootstrap";
import DATA from "../../../DATAFILL";
import TimerComponent from "../../../components/elements/TimerComponent";
// import Countdown from "react-countdown";

const ImovelDetalhe = ({props}) => {
	// TODO: Implementar com o PUBLIC_KEY
	// const mercadopago = new MercadoPago('PUBLIC_KEY', {locale: 'pt-BR'});

	// function checkout() {
	//     mercadopago.checkout({
	//         preference: {
	//           id: 'YOUR_PREFERENCE_ID'
	//         },
	//         render: {
	//           container: '#checkout-container',
	//           label: 'Pay',
	//         }
	//       });
	// }

	const navigate = useNavigate();
	const editarImovel = (e, id) => {
		e.preventDefault();
		console.log(id);
		navigate(`/editarImovel/${id}`);
	};

	function teste() {
		// document.getElementById("card-reserva").style.display = "none";
		document.getElementById("modal-container").style.top = 0;
	}

	document.onkeydown = function (e) {
		if (e.key === "Escape") {
			document.getElementById("modal-container").style.top = -1000 + "px";
		}
	};

	const reservar = () => {
		navigate("/imoveis", { state: {} });
	};

	console.log(props);

	return (
		<main className="d-flex justify-content-between my-5 align-items-start">
			<div className="w-100 d-flex">
				<div className="localização-texto mt-5 w-75">
					<div className="mb-5">
						<h4>Descrição:</h4>
						<p>{DATA.imoveis[props].descricao}</p>
					</div>
					{/* <h4
						className="mb-3"
						style={{
							zIndex: 10,
						}}
					>
						Comodidades:
					</h4> */}
					<div
						style={{
							zIndex: 10,
						}}
						id="comodidades"
						className="d-flex "
					></div>
					<hr />
					<h4 className="py-2 d-flex align-items-start">Endereço:</h4>
					<h6>{DATA.imoveis[props].endereco}</h6>
					<Mapa coord={DATA.imoveis[props].geolocalizacao} modoExibicao={true} />
					{/* {console.log(DATA.imoveis[props.props].geolocalizacao)} */}
					<hr />




				</div>

				<div className="flex-column">
					<div className="text-dark" id="card-reserva">
						<Card
							color="light"
							style={{
								width: "18rem",
							}}
						>
							<CardBody>
								<CardTitle tag="h3">
									<div className=" d-flex">
										<span className="promocao-texto">
											R${" "}
											{
												DATA.imoveis[props].valor_diaria
											}
											/noite
										</span>
										<span className="promocao-porcentagem">
											-25% off
										</span>
									</div>
									<span className="promocao-texto-novopreco">
										R${" "}
										{DATA.imoveis[props].valor_diaria -
											(DATA.imoveis[props].valor_diaria *
												25) /
											100}
										/noite
									</span>
								</CardTitle>

								<CardText>
									<div className="d-flex flex-column mt-3">
										<span>A promoção acaba em:</span>
										<span
											id="promocao-contador"
											className="promocao-contador text-danger"
										></span>
										<TimerComponent
											duracao={
												DATA.imoveis[props].validadePromocao
											}
											idSeletor={"promocao-contador"}
										/>
									</div>
								</CardText>
								<Button
									className="w-100 btn-azul-padrao"
									onClick={teste}
								>
									Reservar
								</Button>
							</CardBody>
						</Card>
					</div>
					{/* TODO: Remover comentário abaixo */}
					{/* <div id="checkout-container"></div> */}

					<div id="modal-container">
						<div id="modal">
							<h3 className="text-center mb-3">
								Reserve este flat
							</h3>
							<div className="d-flex w-100 d-flex align-items-center">
								<Form.Group className="data w-100">
									<Form.Label>Check-in</Form.Label>
									<Form.Control
										type="date"
										name="checkin"
										placeholder="Check-in"
									/>
								</Form.Group>
								<Form.Group className="data w-100">
									<Form.Label>Check-out</Form.Label>
									<Form.Control
										type="date"
										name="checkout"
										placeholder="Check-out"
									/>
								</Form.Group>
							</div>

							<div>
								<Form.Select aria-label="Default select example">
									<option>Quantidade de hóspedes</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</Form.Select>
							</div>

							<div>
								<Button
									className="w-100 btn-azul-padrao mt-3"
									onClick={reservar}
								>
									Fazer reserva
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ImovelDetalhe;
