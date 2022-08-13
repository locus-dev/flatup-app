
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";


const User = ({ usuario, deleteUsuario }) => {
    const navigate = useNavigate();

    /* const editarUsuario = (e, id) => {
        e.preventDefault();
        console.log(id);
        navigate(`/users/edit/${usuario.idUsuario}`);
    }; */

    return (
        <>
            <TableRow key={usuario.id}>
                <TableCell className="tableCell">{usuario.idUsuario}</TableCell>
                <TableCell className="tableCell">{usuario.email}</TableCell>
                <TableCell className="tableCell">{usuario.senha}</TableCell>
               {/*  <TableCell className="tableCell">
                    <td className="text-right px-6 py-4 font-medium text-sm">
                        <button
                            onClick={(e) => editarUsuario(e, usuario.id)}
                            className="rounded text-white font-semibold bg-green-400 houver:bg-green-600 py-600 py-2 px-2">
                            Editar
                        </button>

                        <button
                            onClick={(e) => deleteUsuario(e, usuario.id)}
                            className="rounded text-white font-semibold bg-red-400 hover:bg-red-600 py-600 py-2 px-2">
                            Remover

                        </button>
                    </td>
                </TableCell> */}
            </TableRow>
        </>

    )
}

export default User;