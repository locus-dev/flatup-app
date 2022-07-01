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
				<div>
					<h2>Endereço</h2>
					<CadastroEndereco />
					<button onClick={rodarCarrossel(1)}>Seguir</button>
				</div>
        
				<div className="pt-2">
					<button onClick={rodarCarrossel(-1)}>Voltar</button>

					<h2>Informações adicionais</h2>

					<div>
						<label>Climatizado</label>
						<input type="text" name="" />
					</div>

					<div>
						<label>Número de quartos</label>
						<input type="text" name="" />
					</div>

					<div>
						<label>Possui área de lazer?</label>
						<input type="text" name="" />
					</div>

					<div>
						<label>Tamanho em m²</label>
						<input type="text" name="" />
					</div>

					<div>
						<label>Piscina</label>
						<input type="text" name="" />
					</div>

					<div>
						<label>Número de suites</label>
						<input type="text" name="" />
					</div>

					<button type="submit">Enviar</button>
				</div>
			</form>
			<MailList />
			<Footer />
		</div>
	);
};

export default CadastrarImovel;
