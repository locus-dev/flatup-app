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

const ImovelDetalhe = ({ dados, coords, imagemCapa }) => {
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

	const [qtdHospedes, setQtdHospedes] = useState(1);
	const [checkout, setCheckout] = useState({});
	const [checkin, setCheckin] = useState({});

	var data = new Date(dados.validadePromocao);
	// const [validadePromocaoHoras, setValidadePromocaoHoras] = useState(data.getHours());

	const msInHour = 1000 * 60 * 60;
	var validadePromocaoHoras = Math.round(
		Math.abs(data - Date.now()) / msInHour
	);

	var desconto;
	if (validadePromocaoHoras > 24 && validadePromocaoHoras < 100) {
		desconto = validadePromocaoHoras - (validadePromocaoHoras - 24);
	} else {
		desconto = 0;
	}

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

	var outrosDados = {
		qtdHospedes: qtdHospedes,
		checkout: checkout,
		checkin: checkin,
		desconto: desconto,
		imagemCapa: imagemCapa,
	}
	const reservar = () => {
		navigate(`/imoveis/${dados.idImovel}/confirmar-reserva`, {
			state: { props: dados, outrosDados: outrosDados },
		});
	};

	return (
		<main className="d-flex justify-content-between my-5 align-items-start">
			<div className="w-100 d-flex">
				<div className="localização-texto mt-5 w-75">
					<div className="mb-5">
						<h4>Descrição:</h4>
						<p>{dados.descricao}</p>
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
					<h6>{`${dados.logradouro}, ${dados.numero} ${dados.complemento}, ${dados.bairro}, ${dados.municipio}, ${dados.uf}`}</h6>
					{/* substituir por localização em endereco */}
					<Mapa coord={[-35.0986, -8.1258]} modoExibicao={true} />
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
											R$ {dados.valorDiaria}
											/noite
										</span>
										<span className="promocao-porcentagem">
											-{desconto}% off
										</span>
									</div>
									<span className="promocao-texto-novopreco">
										R${" "}
										{dados.valorDiaria -
											(dados.valorDiaria * desconto) /
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
											duracao={validadePromocaoHoras}
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
										onChange={(e) => {
											setCheckin(e.target.value);
										}}
									/>
								</Form.Group>
								<Form.Group className="data w-100">
									<Form.Label>Check-out</Form.Label>
									<Form.Control
										type="date"
										name="checkout"
										placeholder="Check-out"
										onChange={(e) => {
											setCheckout(e.target.value);
										}}
									/>
								</Form.Group>
							</div>

							<div>
								<Form.Select aria-label="Default select example">
									<option>Quantidade de hóspedes</option>
									<option
										value="1"
										onClick={(e) => {
											setQtdHospedes(
												Number(e.target.value)
											);
										}}
									>
										1
									</option>
									<option
										value="2"
										onClick={(e) => {
											setQtdHospedes(
												Number(e.target.value)
											);
										}}
									>
										2
									</option>
									<option
										value="3"
										onClick={(e) => {
											setQtdHospedes(
												Number(e.target.value)
											);
										}}
									>
										3
									</option>
									<option
										value="4"
										onClick={(e) => {
											setQtdHospedes(
												Number(e.target.value)
											);
										}}
									>
										4
									</option>
									<option
										value="5"
										onClick={(e) => {
											setQtdHospedes(
												Number(e.target.value)
											);
										}}
									>
										5
									</option>
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
