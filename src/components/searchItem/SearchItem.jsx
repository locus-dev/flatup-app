import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="./eita.jpeg" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Beira de praia top</h1>
            <span  className="siDistance">a 50 metros do Coqueiro de Boa viagem</span>
            <span className="siSubtitle">
                Possui um cooler de refrigeracao
            </span>
            <span className="siFeatures">
                1 porta - 1 quarto - 1/2 sala - 3 switch
            </span>
            <span className="siCancelOp">Cancelamento sem taxas!</span>
            <span className="siCancelOpSubtitle">
                pode cancelar depois se quiser
            </span>
        </div>
        <div className="siDetails">Detalhes</div>
    </div>
  )
}

export default SearchItem