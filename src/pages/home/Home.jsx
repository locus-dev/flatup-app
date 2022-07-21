import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.css";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ContextoUsuario } from "../../App";

const Home = () => {
	// const location = useLocation();
	// location.state = location.state ? location.state : {};

	const contexto = useContext(ContextoUsuario);
	// console.log(contexto)

	return (
		<div>
			<Navbar />
			{/* <Navbar undefined/> */}
			<Header />
			<div className="locatesContainer"></div>
			<div className="homeContainer">
				{/* <Featured/> */}
				<FeaturedProperties />
				<FeaturedProperties />
				<FeaturedProperties />
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
