import "./searchItem.css"

const SearchItem = () => {

  return (
    <div className="searchItem">
        <img src="./flat01.jpg" alt="flat01" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Flats incriveis na beira da praia!</h1>
            <span  className="siDistance">50 metros do Coqueiro de Boa viagem</span>
            <span className="siSubtitle">
                Ambiente climatizado
            </span>
            <span className="siFeatures">
                1 porta - 1 quarto - 1/2 sala - 3 switch
            </span>
            <span className="siCancelOp">Cancelamento sem taxas!</span>
            <span className="siCancelOpSubtitle">
                pode cancelar depois se quiser
            </span>
        </div>
        <div className="siDetails"><a href="/Immobile:id">Detalhes</a></div>

    </div>
  )
}

export default SearchItem