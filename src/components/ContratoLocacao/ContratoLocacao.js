import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContratoLocacao = ({ contratoLocacao, deleteContratoLocacao }) => {
    const navigate = useNavigate();

    const editarContratoLocacao = (e, id) => {
        e.preventDefault();
        navigate(`/editarContratoLocacao/${id}`);
    };

    return (
        <tr key={contratoLocacao.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{contratoLocacao.idLocacao}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{contratoLocacao.idImovelFK}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{contratoLocacao.diasLocacao}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{contratoLocacao.valorLocacao}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{contratoLocacao.checkIn}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{contratoLocacao.checkOut}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{contratoLocacao.quantPessoa}</div>
            </td>
            <td className="text-right px-6 py-4 font-medium text-sm">
                <button
                    onClick={(e) => editarContratoLocacao(e, contratoLocacao.id)}
                    className="rounded text-white font-semibold bg-green-400 houver:bg-green-600 py-600 py-2 px-2">
                    Editar
                </button>

                <button
                    onClick={(e) => deleteContratoLocacao(e, contratoLocacao.id)}
                    className="rounded text-white font-semibold bg-red-400 hover:bg-red-600 py-600 py-2 px-2">
                    Remover

                </button>
            </td>

        </tr>
    )
}

export default ContratoLocacao;