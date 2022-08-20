import './location.scss'
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import FlatUpContext from "../../context/FlatUpContext"
import List from "../../components/table/Table";

const LocationDetails = () => {

    const navigate = useNavigate();

    
   
    const [userData, setUserData] = useContext(FlatUpContext);

    const { id } = useParams();

    const location = useLocation();

    const locacao = {
        usuarioEmail: location.state.locacoes.usuarioEmail,
        locacao_id: location.state.locacoes.locacao_id,
        usuario_id: location.state.locacoes.usuario_id,
        imovel_id: location.state.locacoes.imovel_id,
        contrato_locacao_id: location.state.locacoes.contrato_locacao_id,
        status_locacao: location.state.locacoes.status_locacao,

    }


    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get(process.env.REACT_APP_API_URL + `/locacao/encontrar/${location.state.locacoes.locacao_id}`, {
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


    const GERAROPDFPO = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + `/contratolocacao/pdf/${locacao.contrato_locacao_id}`, {
            headers: {
                'Authorization':
                    `Bearer ${userData.userToken}`,
                'Access-Control-Allow-Origin':
                    '*'
            },
            data: userData.userToken,
            responseType: 'blob'

        })
            /* const pdfContents = response.data
            await writeFile('file.pdf', pdfContents); */

            .then((response) => {
                window.open(URL.createObjectURL(response.data))
                //console.log(response.data)
            }).catch((err) => {
                console.log(err)
            })
        console.log('lascou' + response)

    }

    return (
        <>
            <div className="item">

                <div className="details">
                    <span className="itemKey">ID Locação: {locacao.locacao_id}</span>

                    <div className="detailItem">
                        <span className="itemKey">Email Usuário:</span>
                        <span className="itemValue">{locacao.usuarioEmail}</span>
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
                       
                        <button className="botaoPDFdeContrato" onClick={GERAROPDFPO}>Gerar PDF do Contrato Locação</button>
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