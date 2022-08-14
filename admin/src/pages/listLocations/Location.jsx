import './location.scss'
import React, {useContext} from 'react';
import { useNavigate,  useLocation } from 'react-router-dom';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import LocationDetails from './LocationDetails';
import FlatUpContext from "../../context/FlatUpContext"

const Location = ({ locacao }) => {
    const navigate = useNavigate();


    const location = useLocation();
    location.state = location.state ? location.state : {};

    const [userData, setUserData] = useContext(FlatUpContext);

    console.log(userData.userToken + 'asdasda');

    const locacoes = {
        locacao_id: locacao.locacao_id,
        usuario_id: locacao.usuario_id,
        imovel_id: locacao.imovel_id,
        contrato_locacao_id: locacao.contrato_locacao_id,
        status_locacao: locacao.status_locacao
    }

    /*  const visualizarLocacao = (e, id) => {
         e.preventDefault();
         console.log(id);
         navigate(`locationDetais/id/${locacao.idLocacao}`);
     };  */


    /*  const locacoes = {
         idLocacao: locacao.idLocacao,
         idUsuarioFK: locacao.idUsuarioFK,
         idImovelFK: locacao.idImovelFK,
         idContratoLocacaoFK: locacao.idContratoLocacao,
         statusLocacao: locacao.statusLocacao
     } */

   /* const locacoes = {

        idLocacao: 1,
        idUsuarioFK: 1,
        idImovelFK: 1,
        idContratoLocacaoFK: 1,
        statusLocacao: 'ok'

    } */
 


    const componentDetails = () => {
        console.log('EITAS')
        navigate('listLocations/locationDetails', {state: {locacoes}})
    } 


   /*  const componentDetails = (e, id) => {
        e.preventDefault();
        navigate(`details/${id}`);
    }; */

   /*  const redirectLocador = () => {

        return navigate('details', { state: { locacoes } })
    } */

    return (
        <>
            
            <TableRow key={locacao.id}>
                <TableCell className="tableCell">{locacao.locacao_id}</TableCell>
                <TableCell className="tableCell">{locacao.usuario_id}</TableCell>
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