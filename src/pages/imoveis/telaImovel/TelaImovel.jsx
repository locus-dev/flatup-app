import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlatUpContext from "../../../components/context/FlatUpContext";
import { ref, getStorage, listAll, getBlob } from "firebase/storage";
import axios from "axios";

import Navbar from "../../../components/navbar/Navbar";
import CarroselImagem from "../../../components/carroselImagem/CarroselImagem";
import ImovelDetalhe from "../imovelDetalhes/imovelDetalhes";

import DATA from "../../../DATAFILL";
import "./telaImovel.css";

const TelaImovel = () => {
	const location = useLocation();
	
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
		axios.get(process.env.REACT_APP_API_URL + `/imovel/listar/detalhes/${location.state.id}`, {header: {
			authorization: "Bearer " + userData.userToken,
		}}).then((data) => {
			console.log(data.data);
			setDados(data.data);
		}).catch((err) => {
			console.log(err);
		});

	},[])
	
	
	//  Listagem de objetos (imagens e pastas com imagens) no bucket do firebase storage

	// const storage = getStorage(app, "gs://flatup-e23c8.appspot.com");

	// // Create a reference under which you want to list
	// const listRef = ref(storage, '/imovel-exemplo-'+location.state.id);
	
	// // Find all the prefixes and items.
	// listAll(listRef)
	//   .then((res) => {
	// 	res.prefixes.forEach((folderRef) => {
	// 		// console.log(folderRef);
	// 	  // All the prefixes under listRef.
	// 	  // You may call listAll() recursively on them.
	// 	});
	// 	res.items.forEach((itemRef) => {
	// 		// console.log("https://firebasestorage.googleapis.com/v0/b/flatup-e23c8.appspot.com/o/"+itemRef._location.path_+"?alt=media");
	// 		// console.log(itemRef)
	// 		getBlob(storage).then((blob) => {
	// 			console.log(blob)
	// 			console.log(blob.name)
	// 			// console.log(blob.size)
	// 			// console.log(blob.type)
	// 			// console.log(blob.updated)


	// 		}).catch((error) => {	
	// 			console.log(error)
	// 		})
	// 		// All the items under listRef.
	// 	});
	//   }).catch((error) => {
	// 	// Uh-oh, an error occurred!
	//   });

	return (
		<div>
			<Navbar />
			<main>
				<div id="carrosel">
					<h2 id="tituloImovel">{DATA.imoveis[location.state.id-1].titulo_anuncio}</h2>
					{/* {console.log(`Id vindo por parâmetro: ${location.state.id}`)}
					{console.log("Dados simulados:")}
					{console.log(DATA.imoveis[location.state.id-1])} */}
					<CarroselImagem props={location.state.id-1}/>
					<ImovelDetalhe props={location.state.id-1}/>
				</div>
			</main>
		</div>
	);
};

export default TelaImovel;
