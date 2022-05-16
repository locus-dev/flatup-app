import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="https://th.bing.com/th/id/OIP.h9BFfF19O6Gg5oQHhqqYtgHaE_?w=265&h=180&c=7&r=0&o=5&pid=1.7" alt="" className="fpImg" />
            <span className="fpName">Testand</span>
            <span className="fpCity">Recife</span>
            <span className="fpPrice">A partir de R$ 400,00</span>
            <div className="fpRating">
                <button>9.8</button>
                <span>Excelent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://th.bing.com/th/id/OIP.cNMIin1TTxU_Rm5EFiMBWQHaEy?w=246&h=180&c=7&r=0&o=5&pid=1.7" alt="" className="fpImg" />
            <span className="fpName">Quartos</span>
            <span className="fpCity">Paulista</span>
            <span className="fpPrice">A partir de R$ 900,00</span>
            <div className="fpRating">
                <button>9.8</button>
                <span>Excelent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://th.bing.com/th/id/OIP.XTsy6CmzwBqq5__iMt6gYwHaE7?w=267&h=180&c=7&r=0&o=5&pid=1.7" alt="" className="fpImg" />
            <span className="fpName">Quartos</span>
            <span className="fpCity">Paulista</span>
            <span className="fpPrice">A partir de R$ 900,00</span>
            <div className="fpRating">
                <button>9.8</button>
                <span>Excelent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://th.bing.com/th/id/OIP.4qdLMmZYvAB42S5wiLqqHwHaD5?w=303&h=180&c=7&r=0&o=5&pid=1.7" alt="" className="fpImg" />
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