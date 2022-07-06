import React from 'react';
import {useNavigate} from 'react-router-dom';

const Usuario = ({usuario, deleteUsuario}) => {
    const navigate = useNavigate();

    const editarUsuario = (e, id) => {
        e.preventDefault();
        console.log(id);
        navigate(`/editarUsuario/${id}`);
    };

    return (
        <tr key={usuario.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{usuario.email}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{usuario.senha}</div>
            </td>

            
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
        </tr>
    )
}

export default Usuario;