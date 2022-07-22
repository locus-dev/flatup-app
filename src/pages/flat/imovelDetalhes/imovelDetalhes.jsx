import React from "react";
import { useNavigate } from "react-router-dom";

const ImovelDetalhe = ({   }) => {


    const navigate = useNavigate();
    const editarImovel = (e, id) => {
        e.preventDefault();
        console.log(id)
        navigate(`/editarImovel/${id}`);
    };

 


    return (
        <tr >
            
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">Fernando Marçon</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">Climatizacao de rua</div>
            </td>

            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">45</div>
            </td>

            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">Desocupado</div>
            </td>

        
         
        </tr>
    )
}

export default ImovelDetalhe;