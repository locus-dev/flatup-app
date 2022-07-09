import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ImovelService from '../../services/ImovelService'
import '../../components/Imovel/css/Imovel.css';
import Imovel from './Imovel';
import AddImovel from './AddImovel';
import AtualizarImovel from "./AtualizarImovel";


const ListImovel = () => {
    const navigate = useNavigate();

    const [carregando, setCarregando] = useState(true);


    const [imoveis, setImoveis] = useState([]);





    useEffect(() => {
        const fetchData = async () => {
            setCarregando(true);
            try {
                const response = await ImovelService.listarImoveis();
                setImoveis(response.data);

            } catch (error) {
                console.log(error);
            }
            setCarregando(false);
        };
        fetchData();
    }, []);

    const deleteImovel = (e, id) => {
        e.preventDefault();

        ImovelService.deleteImovel(id).then((res) => {
            if (imoveis) {
                setImoveis((prevElement) => {
                    return prevElement.filter((imovel) => imovel.id !== id);

                });
            }
        });
    };

    return (
        <>
            <div className='container mx-auto my-6 listaImovel'>
                <div className='container'>

                    <button
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                        aria-expanded="false"
                        data-toggle="collapse"

                        className='ronded bg-slate-600 text-white px-6 py-2 font-semibold m-3'>
                        Adicionar Imóvel
                    </button>

                    <a
                        _target="_blank"
                        href='http://localhost:8081/imovel/pdf'
                        className='ronded bg-green-500 text-white px-8 py-2 font-semibold'
                    >
                        Gerar PDF
                    </a>

                </div>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <AddImovel />
                        </div>
                    </div>
                </div>


               {/*  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <AtualizarImovel />
                        </div>
                    </div>
                </div> */}

                <div className='flex shadow border-b'>
                    <table className='min-w-full'>
                        <thead className="bg-gray-50">
                            <tr>
                                <th className='text-left font-medium text-gray-500 py-3 px-6'>ID:</th>
                                <th className='text-left font-medium text-gray-500 py-3 px-6'>Climatizado:</th>
                                <th className='text-left font-medium text-gray-500 py-3 px-6'>Qtde de Quartos:</th>
                                <th className='text-left font-medium text-gray-500 py-3 px-6'>Status:</th>

                                <th className='text-right font-medium text-gray-500 py-3 px-6'>Ações</th>
                            </tr>
                        </thead>
                        {!carregando && (
                            <tbody className='bg-white'>
                                {imoveis.map((imovel) => (
                                    <Imovel
                                        imovel={imovel}
                                        deleteImovel={deleteImovel}
                                        key={imovel.id}></Imovel>
                                ))}
                            </tbody>
                        )}
                    </table>
                </div>

            </div>
        </>

    )
}

export default ListImovel;