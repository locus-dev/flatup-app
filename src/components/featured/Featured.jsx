import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://th.bing.com/th/id/OIP.0-TBXnW35olX_CN6CHSpfAHaE7?w=266&h=180&c=7&r=0&o=5&pid=1.7" alt="" className="featureImg" />
                <div className="featuredTitles">
                    <h1>Suape</h1>
                    <p>Desfrute do melhor flat da orla de Suape-Pe</p>
                    <h2>Temporada: 2 dias</h2>
                    <h3>R$ 450,00</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://th.bing.com/th/id/OIP.CdnOCgO9Wi3xYUF7k1ob8QHaE8?w=278&h=185&c=7&r=0&o=5&pid=1.7" alt="" className="featureImg" />
                <div className="featuredTitles">
                    <h1>Veneza</h1>
                    <p>Venha curtir as férias aqui na Veneza brasileira-Recife.</p>
                    <h2>Temporada: 5 dias</h2>
                    <h3>R$ 1550,00</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img src="./baixados.jpeg" alt="" className="featureImg" />
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