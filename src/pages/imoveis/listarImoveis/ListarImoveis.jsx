import "./list.css";
import React, { useContext } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import MailList from "../../../components/mailList/MailList";
import Navbar from "../../../components/navbar/Navbar";
import SearchItem from "../../../components/searchItem/SearchItem";
import { useLocation } from "react-router-dom";
import FlatUpContext from "../../../components/context/FlatUpContext";

const List = () => {
	const location = useLocation();
	location.state = location.state ? location.state : {};

	const [userData, setUserData] = useContext(FlatUpContext);

	console.log(userData);
	
	return (
		<div>
			<Navbar />
			<div className="listContainer">
				<SearchItem dados={location.state.dados}/>
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default List;
