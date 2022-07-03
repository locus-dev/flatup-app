import "./featuredProperties.css";
import DATA from "../../DATAFILL";
import { useNavigate } from "react-router-dom";

const FeaturedProperties = () => {
    const navigate = useNavigate();
	
    return (
		<div className="fp">
			{DATA.imoveis.map((item) => {
				return (
					<div className="fpItem" onClick={() => {navigate("/imoveis:id", {state: {}})}}>
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
