import "./imovelCard.css";

const ImovelCard = () => {
	return (
		<div className="container">
            <br></br><br></br><br></br>
            <div className="card">

            <img className="imovelImg" src="../media/assets/flatapp.png" alt="FlatApp"/>
            <h4 className="imovelNome">Titulo do imovel aqui</h4>
            <p className="informacao">Informações gerais do Imovel, suas caracteristicas basicas...</p>

            <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
            <p className="informacao">Sua reserva conta com a proteção do FlatCover</p>
            <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
            <h3>Imformações do preço</h3>
            <div className="precos">
            <p className="tipoPrice">Taza de Limpeza</p>
            <p className="price">R$ $00.00</p>
            <p className="tipoPrice">Taxa de Serviço</p>
            <p className="price">R$ 00.00</p>
            <p className="tipoPrice">Impostos</p>
            <p className="price">R$ 00.00</p>
            </div>
            <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
            <p className="tipoPrice">Total (BRL) </p>
            <p className="price">R$ 00.00</p>
            <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
            <p className="informacao">Plano de parcelamento <a href="#">Selecionar</a></p>

            <p><button>Finalizar Rezerva</button></p>
            </div>
			
		</div>
	);
};

export default ImovelCard;
