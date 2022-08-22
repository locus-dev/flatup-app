import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import FlatUpContext from "../../../components/context/FlatUpContext";
import { initializeApp } from "firebase/app";
import axios from "axios";

import Navbar from "../../../components/navbar/Navbar";
import CarroselImagem from "../../../components/carroselImagem/CarroselImagem";
import ImovelDetalhe from "../imovelDetalhes/imovelDetalhes";

import DATA from "../../../DATAFILL";
import "./telaImovel.css";

const TelaImovel = () => {
	const location = useLocation();

	var id = location.state.id;

	const [dados, setDados] = useState({});
	const [userData, setUserData] = useContext(FlatUpContext);

	function curtir() {
		document.getElementById("curtirVazio").classList.add("desaparece");
		document.getElementById("curtirCheio").classList.remove("desaparece");
	}

	function descurtir() {
		document.getElementById("curtirVazio").classList.remove("desaparece");
		document.getElementById("curtirCheio").classList.add("desaparece");
	}

	useEffect(() => {
		axios
			.get(
				process.env.REACT_APP_API_URL +
					`/imovel/listar/detalhes/${id}`,
				{
					header: {
						authorization: "Bearer " + userData.userToken,
					},
				}
			)
			.then((data) => {
				console.log(data.data);
				setDados(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<Navbar />
			<main>
				<div id="carrosel">
					<h2 id="tituloImovel">
						{DATA.imoveis[id - 1].titulo_anuncio}
					</h2>
					{/* {console.log(`Id vindo por parâmetro: ${location.state.id}`)}
					{console.log("Dados simulados:")}
					{console.log(DATA.imoveis[location.state.id-1])} */}
					<CarroselImagem props={id}/>
					<ImovelDetalhe props={id-1}/>
				</div>
			</main>
		</div>
	);
};

export default TelaImovel;
