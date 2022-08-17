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
					<div className="lugar">
						<h4>Recife</h4>
					</div>

					<div className="lugar">
						<h4>Porto de Galinhas</h4>
					</div>

					<div className="lugar">
						<h4>Garanhus</h4>
					</div>

					<div className="lugar">
						<h4>Boa Viagem</h4>
					</div>
					<div className="lugar">
						<h4>Jaboatão</h4>
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
