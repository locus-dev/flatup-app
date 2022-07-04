import "./searchItem.css"
import DATA from '../../DATAFILL'

const SearchItem = () => {

  return (
    <div className="searchItem">
        {DATA.imoveis.map((item) => {
                return (
                    <div className="featuredItem searchItem1">
                        <img src={item.imagem} alt="" className="featureImg" />
                        <div className="featuredTitles">
                            <h1>{item.titulo_anuncio}</h1>
                            <p>{item.descricao}</p>
                            <h3>R${item.valor_diaria}/diária</h3>
                        </div>
                    </div>
                )
            })}
    </div>
  )
}

export default SearchItem