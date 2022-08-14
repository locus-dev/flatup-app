import React, {useContext} from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import FlatUpContext from "../../../../context/FlatUpContext"

const Locador = () => {

    
    const location = useLocation();
    console.log(location.state.usuarios.nome + 'Aqui é o lao')

    location.state = location.state ? location.state : {};

    const [userData, setUserData] = useContext(FlatUpContext);

    console.log(userData.userToken + 'asdasda');

    const usuarios = {
        id: location.state.usuarios.id,
        nome: location.state.usuarios.nome,
        email: location.state.usuarios.email,    
        telefone: location.state.usuarios.telefone,
        endereco: location.state.usuarios.endereco,
        pais: location.state.usuarios.pais
    }
    return (

        <>
            <div className="item">
                <img
                    src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    alt=""
                    className="itemImg"
                />
                <div className="details">
                    <h1 className="itemTitle">{usuarios.nome}</h1>
                    <div className="detailItem">
                        <span className="itemKey">Email:</span>
                        <span className="itemValue">{usuarios.email}</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Phone:</span>
                        <span className="itemValue">{usuarios.telefone}</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Endereço:</span>
                        <span className="itemValue">
                            {usuarios.endereco}
                        </span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">País:</span>
                        <span className="itemValue">{usuarios.pais}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Locador;