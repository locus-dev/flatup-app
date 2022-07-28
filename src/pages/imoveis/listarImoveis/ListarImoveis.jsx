import "./list.css";
import React, { useContext } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import MailList from "../../../components/mailList/MailList";
import Navbar from "../../../components/navbar/Navbar";
import SearchItem from "../../../components/searchItem/SearchItem";
import { useLocation } from "react-router-dom";
import { ContextoUsuario } from "../../../App";

const List = () => {
	const location = useLocation();
	location.state = location.state ? location.state : {};

	const contexto = useContext(ContextoUsuario);

	console.log(contexto)
	return (
		<div>
			<Navbar />
			<Header />
			<div className="listContainer">
				<SearchItem dados={location.state.dados}/>
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default List;
