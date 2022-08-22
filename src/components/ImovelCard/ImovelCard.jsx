import axios from "axios";
import { useContext } from "react";
import FlatUpContext from "../context/FlatUpContext";
import "./imovelCard.css";

const ImovelCard = ({ props, outrosDados }) => {
	const [userData, setUserData] = useContext(FlatUpContext);

	var dataCheckin = new Date(outrosDados.checkin);
	var dataCheckout = new Date(outrosDados.checkout);
	const msInHour = 1000 * 60 * 60;
	var horasDeOcupacao = Math.round(
		Math.abs(dataCheckout - dataCheckin) / msInHour
	);
	var valorTotal =
		(props.valorDiaria - (props.valorDiaria * outrosDados.desconto) / 100) *
		(horasDeOcupacao / 24);

	function realizarReserva() {
		axios
			.post(
				`${process.env.REACT_APP_API_URL}/contratolocacao/salvar`,
				{
					check_in: outrosDados.checkin,
					check_out: outrosDados.checkout,
					dias_locacao: horasDeOcupacao / 24,
					valor_locacao: valorTotal,
					validade_promocao: props.validadePromocao,
					quant_pessoa: outrosDados.qtdHospedes,
					imovel_id: props.idImovel,
				},
				{
					headers: {
						Authorization: `Bearer ${userData.userToken}`,
					},
				}
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div
			className="d-flex align-items-center justify-content-center"
			style={{ width: "100vw", height: "100vh" }}
		>
			<div className="container">
				<div className="card">
					<div className="text-center py-3 d-flex justify-content-center align-items-center  ">
						<h2 className="text-azul-padrao mt-3">
							Confirme sua reserva
						</h2>
					</div>
					<div className="p-3">
						<div
							className="d-flex mt-2 align-items-center border"
							style={{ borderRadius: "10px" }}
						>
							<div
								className="bg-primary"
								style={{
									backgroundImage: "(url())",
									borderRadius: "10px",
									backgroundSize: "cover",
									width: "200px",
									height: "120px",
								}}
							>
								{/* adiciona a foto do imovel como background */}
							</div>
							<div className="p-3 d-flex flex-column align-items-start">
								<h5>{props.tituloAnuncio}</h5>
								<h6>{props.municipio}</h6>
								<h6>R$ {props.valorDiaria}/noite</h6>
							</div>
						</div>
					</div>
					<hr />
					<div className="px-3">
						<h4 style={{ textAlign: "left" }}>
							Informações do preço
						</h4>
						<div className="precos">
							<div className="d-flex mt-3 justify-content-between">
								<h5>Valor da diária</h5>
								<h5 className="text-danger">
									{props.valorDiaria}
								</h5>
							</div>
							<div className="d-flex mt-3 justify-content-between">
								<h5>Desconto</h5>
								<h5 className="text-danger">
									-{outrosDados.desconto}%
								</h5>
							</div>
							<div className="d-flex mt-3 justify-content-between">
								<h5>Horas de ocupação</h5>
								<h5 className="text-danger">
									{horasDeOcupacao}h
								</h5>
							</div>
							<div className="d-flex mt-3 justify-content-between">
								<h5>SubTotal</h5>
								<h5 className="text-danger">
									valor da diária x dias - desconto
								</h5>
							</div>
						</div>
					</div>
					<hr />
					<div className="py-3 mb-2 d-flex justify-content-between p-3">
						<h3>Total (BRL) </h3>
						<h3>R$ {valorTotal}</h3>
					</div>

					<button onClick={realizarReserva}>Finalizar Reserva</button>
				</div>
			</div>
		</div>
	);
};

export default ImovelCard;
