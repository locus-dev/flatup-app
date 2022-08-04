// import API from "../../services/API";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FlatUpContext from '../context/FlatUpContext';
import DATA from "../../DATAFILL";
import "./featuredProperties.css";

const FeaturedProperties = () => {
	const [dados, setDados] = useState({});
    const navigate = useNavigate();
	
	const [userData, setUserData] = useContext(FlatUpContext);

	useEffect(() => {
		axios
		.get(process.env.REACT_APP_API_URL+`/imovel/listar`, {headers: {
			Authorization:
				"Bearer " + userData.token,
		}})
		.then((data) => {
			setDados(data.data)
		})
		.catch((error) => {
			console.log(error);
		});
	},[]);

	console.log(dados)

    return (
		<div className="fp">
			{DATA.imoveis.map((item) => {
				return (
					<div key={item.id} className="fpItem" onClick={() => {navigate(`/imoveis/${item.id}`, {state:{id:item.id}})}}>
						<img src={item.imagem} alt="" className="fpImg" />
						<span className="fpName">{item.titulo_anuncio}</span>
						<span className="fpCity">{item.descricao}</span>
						<span className="fpPrice">
							R${item.valor_diaria}/noite
						</span>
						<div className="fpRating">
							<button>{item.avaliacao}</button>
							<span>
								{item.avaliacao > 8 ? "Excelente" : "Bom"}
							</span>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default FeaturedProperties;
