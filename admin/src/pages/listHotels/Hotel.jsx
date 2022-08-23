import React, {useState, useEffect, useContext} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import FlatUpContext from "../../context/FlatUpContext"


const Hotel = ({ imovel, deleteImovel }) => {

    const location = useLocation();
    const [userData, setUserData] = useContext(FlatUpContext);

    const navigate = useNavigate();
    
    const areaLazerParaString = imovel.areaLazer
    const areaDeLazer = areaLazerParaString.toString()
    console.log(areaDeLazer)

    const possuiPiscinaParaString = imovel.piscina
    const piscinaTem = possuiPiscinaParaString.toString()
    console.log(piscinaTem)

    const[endereco, setEndereco] = useState([])
    console.log(endereco.bairro)
   
    
  
    /* const editarImovel = (e, id) => {
        e.preventDefault();
        console.log(id);
        navigate(`/hotels/edit/${imovel.idImovel}`);
    }; */

    useEffect(() => {
        const fetchData = async () => {
           
            try {
                const response = await axios.get(process.env.REACT_APP_API_URL + `/endereco/encontrar/${imovel.idEnderecoFK}`, {
                    headers: {
                        'Authorization':
                            `Bearer ${userData.userToken}`,

                        'Access-Control-Allow-Origin':
                            '*'
                    },
                    data: userData
                })
                setEndereco(response.data);
                
            } catch (error) {
                console.log(error);
            }
            
        };
        fetchData();
    }, [imovel.idEnderecoFK]);

    return (
        <>
            <TableRow key={imovel.idImovel}>
                <TableCell className="tableCell">{imovel.idImovel}</TableCell>
                <TableCell className="tableCell">{imovel.climatizado}</TableCell>
                <TableCell className="tableCell">{imovel.statusOcupacao}</TableCell>
                <TableCell className="tableCell">{endereco.logradouro}</TableCell>
                <TableCell className="tableCell">{imovel.quantQuarto}</TableCell>
                <TableCell className="tableCell">{areaDeLazer}</TableCell>
                <TableCell className="tableCell">{imovel.areaM2}</TableCell>
                <TableCell className="tableCell">{piscinaTem}</TableCell>
                <TableCell className="tableCell">{imovel.quantSuite}</TableCell>
                {/* <TableCell className="tableCell">
                    <td className="text-right px-6 py-4 font-medium text-sm">
                        <button
                            onClick={(e) => editarImovel(e, imovel.id)}
                            className="rounded text-white font-semibold bg-green-400 houver:bg-green-600 py-600 py-2 px-2">
                            Editar
                        </button>

                        <button
                            onClick={(e) => deleteImovel(e, imovel.id)}
                            className="rounded text-white font-semibold bg-red-400 hover:bg-red-600 py-600 py-2 px-2">
                            Remover

                        </button>
                    </td>
                </TableCell> */}
            </TableRow>

        </>
    )
}

export default Hotel;