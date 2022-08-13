import React from 'react';
import { useNavigate } from 'react-router-dom';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const Partner = ({ partner, deletePartner }) => {
    const navigate = useNavigate();

    /* const editarPartner = (e, id) => {
        e.preventDefault();
        console.log(id);
        navigate(`/editarUsuario/${id}`);
    }; */

    return (
        <>
            <TableRow key={partner.id}>
                <TableCell className="tableCell">{partner.descricao}</TableCell>
                <TableCell className="tableCell">{partner.nomeFantasia}</TableCell>
                <TableCell className="tableCell">{partner.cnpj}</TableCell>
                {/* <TableCell className="tableCell">
                    <td className="text-right px-6 py-4 font-medium text-sm">
                        <button
                            onClick={(e) => editarPartner(e, partner.id)}
                            className="rounded text-white font-semibold bg-green-400 houver:bg-green-600 py-600 py-2 px-2">
                            Editar
                        </button>

                        <button
                            onClick={(e) => deletePartner(e, partner.id)}
                            className="rounded text-white font-semibold bg-red-400 hover:bg-red-600 py-600 py-2 px-2">
                            Remover

                        </button>
                    </td>
                </TableCell> */}
            </TableRow>
        </>



    )
}

export default Partner;