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
	console.log(userData)

	return (
		<div>
			<Navbar />
			<Header />
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
