import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { useContext } from "react";
import FlatUpContext from '../../components/context/FlatUpContext';

const Home = () => {

	const [userData, setUserData] = useContext(FlatUpContext);
	// console.log(userData)

	return (
		<div>
			<Navbar />
			<Header />
			<div id="explorar" className="container mt-4">
				<h1>Conheça lugares</h1>
				<div className="d-flex justify-content-between">
					<div className="lugar" id="recife">
						<div className="lugar-texto">
							<h5>Recife</h5>
						</div>
					</div>

					<div className="lugar" id="porto-de-galinha">
						<div className="lugar-texto">
							<h5>Porto de Galinhas</h5>
						</div>
					</div>

					<div className="lugar" id="garanhus">
						<div className="lugar-texto">
							<h5>Garanhus</h5>
						</div>
					</div>

					<div className="lugar" id="boa-viagem">
						<div className="lugar-texto">
							<h5>Boa Viagem</h5>
						</div>
					</div>
					<div className="lugar" id="jaboatao">
						<div className="lugar-texto">
							<h5>Jaboatão</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="locatesContainer"></div>
			<div className="homeContainer container">
				<FeaturedProperties />
				<FeaturedProperties />
				<FeaturedProperties />
			</div>
			<br /><br />
			<Footer />
		</div>
	);
};

export default Home;
