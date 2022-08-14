import React from 'react';
import { useNavigate } from 'react-router-dom';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";


const Hotel = ({ imovel, deleteImovel }) => {
    const navigate = useNavigate();

    /* const editarImovel = (e, id) => {
        e.preventDefault();
        console.log(id);
        navigate(`/hotels/edit/${imovel.idImovel}`);
    }; */

    return (
        <>
            <TableRow key={imovel.id}>
                <TableCell className="tableCell">{imovel.idImovel}</TableCell>
                <TableCell className="tableCell">{imovel.climatizado}</TableCell>
                <TableCell className="tableCell">{imovel.statusOcupacao}</TableCell>
                <TableCell className="tableCell">{imovel.idEnderecoFK}</TableCell>
                <TableCell className="tableCell">{imovel.quantQuarto}</TableCell>
                <TableCell className="tableCell">{imovel.areaLazer}</TableCell>
                <TableCell className="tableCell">{imovel.areaM2}</TableCell>
                <TableCell className="tableCell">{imovel.piscina}</TableCell>
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