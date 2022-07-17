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
	// const location = useLocation();
	// location.state = location.state ? location.state : {};

	const contexto = useContext(ContextoUsuario);

	return (
		<div>
			<Navbar token={contexto.token} />
			<Header />
			<div className="listContainer">
				<SearchItem />
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default List;
