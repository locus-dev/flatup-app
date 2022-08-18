import './location.scss'
import React, {useContext, useState, useEffect} from 'react';
import { useNavigate,  useLocation } from 'react-router-dom';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import LocationDetails from './LocationDetails';
import FlatUpContext from "../../context/FlatUpContext"
import axios from 'axios';

const Location = ({ locacao }) => {
    const navigate = useNavigate();


    const location = useLocation();
    location.state = location.state ? location.state : {};

    const [userData, setUserData] = useContext(FlatUpContext);

    console.log(userData.userToken + 'asdasda');




    

    const[usuarioEspecifico,setUsuarioEspecifico] = useState({
        idUsuario: '',
        email: '',
        google_id: '',
        senha: ''
    })

    const[contratoLocacao, setContratoLocacao] = useState({
        idLocacao: '',
        checkIn: '',
        checkOut: '',
        diasLocacao: '',
        valorLocacao: '',
        quantPessoa: ''
    })


    const locacoes = {
        usuarioEmail: usuarioEspecifico.email,
        locacao_id: locacao.locacao_id,
        usuario_id: locacao.usuario_id,
        imovel_id: locacao.imovel_id,
        contrato_locacao_id: locacao.contrato_locacao_id,
        status_locacao: locacao.status_locacao,

        idLocacao: contratoLocacao.idLocacao,
        checkIn: contratoLocacao.checkIn,
        checkOut: contratoLocacao.checkOut,
        diasLocacao: contratoLocacao.diasLocacao,
        valorLocacao: contratoLocacao.valorLocacao,
        quantPessoa: contratoLocacao.quantPessoa
        
    }



    const componentDetails = () => {
        if(locacoes != null)
            navigate('listLocations/locationDetails', {state: {locacoes}})
    } 


    useEffect(() => {
        const fetchData = async () => {
          try {
    
            const response = await  axios.get(process.env.REACT_APP_API_URL + `/contratolocacao/encontrar/${locacoes.contrato_locacao_id}`, {
              headers: {
                'Authorization':
                  `Bearer ${userData.userToken}`,
                'Access-Control-Allow-Origin':
                  '*'
              },
              data: userData.userToken
            })
            setContratoLocacao(response.data);
            
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);
    
    
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(process.env.REACT_APP_API_URL + `/usuario/encontrar/${locacoes.locacao_id}` , {
                    headers: {
                        'Authorization':
                            `Bearer ${userData.userToken}`,
                        'Access-Control-Allow-Origin':
                            '*'
                    },
                    data: userData.userToken
                })
                setUsuarioEspecifico(response.data);

            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
   

    return (
        <>
            
            <TableRow key={locacao.id}>
                <TableCell className="tableCell">{locacao.locacao_id}</TableCell>
                <TableCell className="tableCell">{usuarioEspecifico.email}</TableCell>
                <TableCell className="tableCell">{locacao.imovel_id}</TableCell>
                <TableCell className="tableCell">{locacao.contrato_locacao_id}</TableCell>
                <TableCell className="tableCell">{locacao.status_locacao}</TableCell>
                <TableCell className="tableCell">
                    <td className="text-right px-6 py-4 font-medium text-sm">
                        <button
                            onClick={(e) => componentDetails(e, locacao.id)}
                            className="botaoVisualizar">
                            Visualizar
                        </button>

                        {/*  <button
                            onClick={(e) => deleteUsuario(e, usuario.id)}
                            className="rounded text-white font-semibold bg-red-400 hover:bg-red-600 py-600 py-2 px-2">
                            Remover

                        </button> */}
                    </td>
                </TableCell>
            </TableRow>
        </>

    )
}

export default Location;