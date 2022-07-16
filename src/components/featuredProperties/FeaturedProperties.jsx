import { useNavigate } from "react-router-dom";
import DATA from "../../DATAFILL";
import "./featuredProperties.css";

const FeaturedProperties = () => {
    const navigate = useNavigate();
	
    return (
		<div className="fp">
			{DATA.imoveis.map((item) => {
				return (
					<div key={item.id} className="fpItem" onClick={() => {navigate("/imoveis", item.id)}}>
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
