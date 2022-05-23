import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="./flat01.jpg" alt="" className="featureImg" />
                <div className="featuredTitles">
                    <h1>Suape</h1>
                    <p>Desfrute do melhor flat da orla de Suape-Pe</p>
                    <h2>Temporada: 2 dias</h2>
                    <h3>R$ 450,00</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img src="./flat02.jpg" alt="" className="featureImg" />
                <div className="featuredTitles">
                    <h1>Veneza</h1>
                    <p>Venha curtir as férias aqui na Veneza brasileira-Recife.</p>
                    <h2>Temporada: 5 dias</h2>
                    <h3>R$ 1550,00</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img src="./breach01.jpg" alt="" className="featureImg" />
                <div className="featuredTitles">
                    <h1>Porto de Galinhas</h1>
                    <p>Conhecido por "Caribe Brasileiro", a praia de porto de Galinhas é muito visitada.</p>
                    <h2>Temporada: 5 dias</h2>
                    <h3>R$ 1550,00</h3>
                </div>
               
            </div>


        </div>
    )
}

export default Featured