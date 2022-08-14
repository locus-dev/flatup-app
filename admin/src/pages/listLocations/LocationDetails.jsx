
import axios from "axios";
import React, { useEffect, useState , useContext} from "react";
import {useLocation, useParams} from 'react-router-dom';
import FlatUpContext from "../../context/FlatUpContext"

const LocationDetails = () => {

    
    
    //location.state = location.state ? location.state : {};
    //console.log(location.state.usuarios.nome + 'Aqui é o lao')
    const [userData, setUserData] = useContext(FlatUpContext);
    
    const { id } = useParams();

    const location = useLocation();

    const locacao = {
        locacao_id: location.state.locacoes.locacao_id,
        usuario_id: location.state.locacoes.usuario_id,
        imovel_id: location.state.locacoes.imovel_id,
        contrato_locacao_id: location.state.locacoes.contrato_locacao_id,
        status_locacao: location.state.locacoes.status_locacao
    }

    
    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get(process.env.REACT_APP_API_URL + `/locacao/encontrar/${id}`, {
                    headers: {
                        'Authorization':
                            `Bearer ${userData.userToken}`,
                        'Access-Control-Allow-Origin':
                            '*'
                    },
                    data: userData.userToken
                })
                //setLocacao(response.data);

            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

  

    return (

        <>
            <div className="item">
                <img
                    src="https://amoaves.com.br/wp-content/uploads/2021/02/032-VI.jpg"
                    alt=""
                    className="itemImg"
                />
                <div className="details">
                    <span className="itemKey">ID Locação: {locacao.locacao_id}</span>
                   
                    <div className="detailItem">
                        <span className="itemKey">Nome do Usuário:</span>
                        <span className="itemValue">{locacao.usuario_id}</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Imóvel:</span>
                        <span className="itemValue">{locacao.imovel_id}</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Contrato locação:</span>
                        <span className="itemValue">
                        {locacao.contrato_locacao_id}
                        </span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Status Locação:</span>
                        <span className="itemValue">{locacao.status_locacao}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocationDetails;