import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import MailList from "../../../components/mailList/MailList";
import Navbar from "../../../components/navbar/Navbar";
import CadastroEndereco from "../../../components/cadastroEndereco/CadastroEndereco";
import "./CadastrarImovel.css";

const CadastrarImovel = () => {
	function rodarCarrossel(sentido) {}

	return (
		<div>
			<Navbar />
			<form className="form-carrossel">
				<div className="carrossel-slide" id="slide-1">
					<h2>Endereço</h2>
					<CadastroEndereco />
					<button
						type="button"
						onClick={function () {
							// document.getElementById('slide-2').style.right = 0
							// document.getElementById('slide-2').style.left = 0
							document.getElementById("slide-1").style.display =
								"none";
							document.getElementById("slide-2").style.display =
								"flex";
						}}
					>
						Seguir
					</button>
				</div>

				<div className="carrossel-slide" id="slide-2">
					
					<h2>Informações adicionais</h2>
					<div className="form-body">
						<div className="form-control">
							<label>Climatizado</label>
							<div>
								<input
									className="input checkbox"
									type="checkbox"
									name=""
								/>
								<span>Sim</span>
							</div>
							<div>
								<input
									className="input checkbox"
									type="checkbox"
									name=""
								/>
								<span>Não</span>
							</div>
						</div>

						<div className="form-control">
							<label>Número de quartos</label>
							<input className="input" type="text" name="" />
						</div>

						<div className="form-control">
							<label>Possui área de lazer?</label>
							<div>
								<input
									className="input checkbox"
									type="checkbox"
									name=""
								/>
								<span>Sim</span>
							</div>
							<div>
								<input
									className="input checkbox"
									type="checkbox"
									name=""
								/>
								<span>Não</span>
							</div>
						</div>

						<div className="form-control">
							<label>Tamanho em m²</label>
							<input className="input" type="text" name="" />
						</div>

						<div className="form-control">
							<label>Piscina</label>
							<div>
								<input
									className="input checkbox"
									type="checkbox"
									name=""
								/>
								<span>Sim</span>
							</div>
							<div>
								<input
									className="input checkbox"
									type="checkbox"
									name=""
								/>
								<span>Não</span>
							</div>
						</div>

						<div className="form-control">
							<label>Número de suites</label>
							<input className="input" type="text" name="" />
						</div>

						<div>
						<button
						type="button"
						onClick={function () {
							// document.getElementById('slide-1').style.right = 0
							// document.getElementById('slide-1').style.left = 0
							document.getElementById("slide-2").style.display =
								"none";
							document.getElementById("slide-1").style.display =
								"flex";
						}}
					>
						Voltar
					</button>
						<button type="submit">Enviar</button>
					</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CadastrarImovel;
