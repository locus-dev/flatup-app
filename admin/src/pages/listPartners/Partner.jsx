import React from 'react';
import { useNavigate } from 'react-router-dom';

const Partner = ({ partner, deletePartner }) => {
    const navigate = useNavigate();

    const editarPartner = (e, id) => {
        e.preventDefault();
        console.log(id);
        navigate(`/editarUsuario/${id}`);
    };

    return (
        <tr key={partner.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{partner.descricao}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{partner.nomeFantasia}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{partner.cnpj}</div>
            </td>
           {/*  <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{partner.cnpj}</div>
            </td> */}


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
        </tr>
    )
}

export default Partner;