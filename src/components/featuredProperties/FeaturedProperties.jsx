import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="./flat01.jpg" alt="" className="fpImg" />
            <span className="fpName">Testand</span>
            <span className="fpCity">Recife</span>
            <span className="fpPrice">A partir de R$ 400,00</span>
            <div className="fpRating">
                <button>9.8</button>
                <span>Excelent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="./flat02.jpg" alt="" className="fpImg" />
            <span className="fpName">Quartos</span>
            <span className="fpCity">Paulista</span>
            <span className="fpPrice">A partir de R$ 900,00</span>
            <div className="fpRating">
                <button>9.8</button>
                <span>Excelent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="./flat03.jpg" alt="" className="fpImg" />
            <span className="fpName">Quartos</span>
            <span className="fpCity">Paulista</span>
            <span className="fpPrice">A partir de R$ 900,00</span>
            <div className="fpRating">
                <button>9.8</button>
                <span>Excelent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="./flat04.jpg" alt="" className="fpImg" />
            <span className="fpName">Quartos</span>
            <span className="fpCity">Paulista</span>
            <span className="fpPrice">A partir de R$ 900,00</span>
            <div className="fpRating">
                <button>9.8</button>
                <span>Excelent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties