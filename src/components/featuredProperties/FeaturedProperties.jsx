// import API from "../../services/API";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FlatUpContext from "../context/FlatUpContext";
import DATA from "../../DATAFILL";
import { getStorage, ref, listAll } from "firebase/storage";
import app from "../../config";
import "./featuredProperties.css";

const FeaturedProperties = () => {
	const [dados, setDados] = useState([]);
	const navigate = useNavigate();

	const [userData, setUserData] = useContext(FlatUpContext);

	useEffect(() => {
		axios.get(process.env.REACT_APP_API_URL + `/imovel/listar/descricao`, {
				headers: {
					Authorization: "Bearer " + userData.token,
				},
			})
			.then((data) => {
				data.data.map((item) => {
					console.log(item);
				});
				setDados(data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

				return (
					<div className="fp">
						{dados.map((item) => {
							if (item.statusOcupacao === "Desocupado") {
							return (
								<div
									key={item.idImovel}
									className="fpItem"
									onClick={() => {
										navigate(`/imoveis/${item.idImovel}`, {
											state: { id: item.idImovel },
										});
									}}
								>
									<div
										id="imagem"
										style={{
											backgroundImage:
												"url(" +
												"https://firebasestorage.googleapis.com/v0/b/flatup-e23c8.appspot.com/o/imovel-exemplo-1%2F263387224.jpg?alt=media&token=e0072365-1c61-4998-9d85-964c7019d39f" +
												")",
											backgroundSize: "cover",
											backgroundPosition: "center",
										}}
									></div>
									<span className="fpName">{item.titulo_anuncio}</span>
									<span className="fpName">Imóvel</span>
									<span className="fpCity">Moreno</span>
									<span className="fpPrice">
										R${item.valor_diaria}/noite
									</span>
									{/* <span className="fpPrice">R$500/noite</span> */}
									{/* <div className="fpRating">
										<button>{item.avaliacao}</button>
										<span>
											{item.avaliacao > 8 ? "Excelente" : "Bom"}
										</span>
									</div> */}
									{/* <div className="fpRating">
										<button>8</button>
										<span>Bom</span>
									</div> */}
								</div>
							);
						}})}
					</div>
				);
	// console.log(dados)

	// const storage = getStorage(app, "gs://flatup-e23c8.appspot.com");

	// // Create a reference under which you want to list
	// const listRef = ref(storage, "/imovel-exemplo-1");

	// // Find all the prefixes and items.
	// listAll(listRef)
	// 	.then((res) => {
	// 		res.prefixes.forEach((folderRef) => {
	// 			// console.log(folderRef);
	// 			// All the prefixes under listRef.
	// 			// You may call listAll() recursively on them.
	// 		});
	// 		res.items.forEach((itemRef) => {
	// 			// console.log(itemRef);
	// 			// All the items under listRef.
	// 		});
	// 	})
	// 	.catch((error) => {
	// 		// Uh-oh, an error occurred!
	// 	});

	// return (
	// 	<div className="fp">
	// 		{dados.map((item) => {
	// 			return (
	// 				<div key={item.id} className="fpItem" onClick={() => { navigate(`/imoveis/${item.id}`, { state: { id: item.id } }) }}>
	// 					<div id="imagem" style={{ backgroundImage: 'url(' + item.imagem + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
	// 					<span className="fpName">{item.titulo_anuncio}</span>
	// 					<span className="fpCity">{item.municipio}</span>
	// 					{/* <span className="fpDesc">{item.descricao}</span> */}
	// 					<span className="fpPrice">
	// 						R${item.valor_diaria}/noite
	// 					</span>
	// 					<div className="fpRating">
	// 						<button>{item.avaliacao}</button>
	// 						<span>
	// 							{item.avaliacao > 8 ? "Excelente" : "Bom"}
	// 						</span>
	// 					</div>
	// 				</div>
	// 			);
	// 		})}
	// 		{/* {DATA.imoveis.map((item) => {
	// 			return (
	// 				<div key={item.id} className="fpItem" onClick={() => { navigate(`/imoveis/${item.id}`, { state: { id: item.id } }) }}>
	// 					<div id="imagem" style={{ backgroundImage: 'url(' + item.imagem + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
	// 					<span className="fpName">{item.titulo_anuncio}</span>
	// 					<span className="fpCity">{item.municipio}</span>
	// 					{/* <span className="fpDesc">{item.descricao}</span> */}
	// 					<span className="fpPrice">
	// 						R${item.valor_diaria}/noite
	// 					</span>
	// 					<div className="fpRating">
	// 						<button>{item.avaliacao}</button>
	// 						<span>
	// 							{item.avaliacao > 8 ? "Excelente" : "Bom"}
	// 						</span>
	// 					</div>
	// 				</div>
	// 			);
	// 		})} */}
	// 	</div>
	// );
};

export default FeaturedProperties;
