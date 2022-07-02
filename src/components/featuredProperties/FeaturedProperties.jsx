import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="./flat01.jpg" alt="" className="fpImg" />
            <span className="fpName">Flat na pracinha de Boa Viagem</span>
            <span className="fpCity">Recife, PE</span>
            <span className="fpPrice">R$235/noite</span>
            <div className="fpRating">
                <button>9.6</button>
                <span>Excelente</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="./flat02.jpg" alt="" className="fpImg" />
            <span className="fpName">Chalé acolhedor em Garanhuns</span>
            <span className="fpCity">Garanhuns, PE</span>
            <span className="fpPrice">R$315/noite</span>
            <div className="fpRating">
                <button>9.4</button>
                <span>Excelente</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="./flat03.jpg" alt="" className="fpImg" />
            <span className="fpName">Flat em Muro Alto</span>
            <span className="fpCity">Jaboatão dos Guararapes, PE</span>
            <span className="fpPrice">R$450/noite</span>
            <div className="fpRating">
                <button>9.8</button>
                <span>Excelente</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="./flat04.jpg" alt="" className="fpImg" />
            <span className="fpName">Hotel no centro comercial de Maceió</span>
            <span className="fpCity">Maceió, AL</span>
            <span className="fpPrice">R$135/noite</span>
            <div className="fpRating">
                <button>8.6</button>
                <span>Excelente</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties