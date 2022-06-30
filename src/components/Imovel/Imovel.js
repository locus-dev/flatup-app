import React from "react";
import { useNavigate } from "react-router-dom";


const Imovel = ({ imovel, deleteImovel }) => {
    
    
    const navigate = useNavigate();
    const editarImovel = (e, id) => {
        e.preventDefault();
        console.log(id)
        navigate(`/editarImovel/${id}`);
    };

    return (
        <tr key={imovel.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{imovel.idImovel}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{imovel.climatizado}</div>
            </td>

            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{imovel.quantQuarto}</div>
            </td>

            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{imovel.statusOcupacao}</div>
            </td>

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

        </tr>
    )
}

export default Imovel;