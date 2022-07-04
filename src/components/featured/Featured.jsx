import "./featured.css"
import DATA from '../../DATAFILL'

const Featured = () => {
    return (
        <div className="featured">
            {DATA.imoveis.map((item) => {
                return (
                    <div className="featuredItem">
                        <img src={item.imagem} alt="" className="featureImg" />
                        <div className="featuredTitles">
                            <h1>{item.titulo_anuncio}</h1>
                            <p>{item.descricao}</p>
                            <h2></h2>
                            <h3>R${item.valor_diaria}/diária</h3>
                        </div>
                    </div>
                )
            })}
            </div>
    )
}

export default Featured