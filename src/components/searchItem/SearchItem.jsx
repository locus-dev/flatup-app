import DATA from "../../DATAFILL";
import "./searchItem.css";
import { useNavigate } from "react-router-dom";

const SearchItem = (dados) => {
	const navigate = useNavigate();

	return (
		<div className="searchItem">
			{DATA.imoveis.map((item) => {
				return (
					<div key={item.id}
						className="searchItem siDistance"
						onClick={() => {
							navigate("/imoveis/" + item.id, {state:{id:item.id}});
						}}
					>
						<img src={item.imagem} alt="" className="siImg" />
						<div className="siTitle">
							<h1>{item.titulo_anuncio}</h1>
							<p>{item.municipio}</p>
							<p class="siDesc">{item.descricao}</p>
							<h3>R${item.valor_diaria}/diária</h3>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default SearchItem;
