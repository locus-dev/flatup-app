import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ContratoLocacaoService from '../../services/ContratoLocacaoService';
import '../ContratoLocacao/css/ContratoLocacao.css';
import ContratoLocacao from './ContratoLocacao';
import AddContratoLocacao from './AddContratoLocacao';

const ListContratoLocacao = () => {
    const navigate = useNavigate();

    const [carregando, setCarregando] = useState(true);
    const [contratosLocacao, setContratosLocacao] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setCarregando(true);
            try{
                const response = await ContratoLocacaoService.listarContratosLocacao();
                setContratosLocacao(response.data);
            }catch(error){
                console.log(error);
            }
            setCarregando(false);
        };
        fetchData();
    }, []);

    const deleteContratoLocacao = (e, id) => {
        e.preventDefault();
        ContratoLocacaoService.deleteContratoLocacao(id).then((res) =>{
            if(contratosLocacao){
                setContratosLocacao((prevElement) => {
                    return prevElement.filter((contratoLocacao)=> contratoLocacao.id !== id);
                });
            }
        });
    };

    return (
        <>
            <div className='container mx-auto my-6 listaUsuario'>
                <div className='container'>

                    <button
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                        aria-expanded="false"
                        data-toggle="collapse"

                        /* onClick={() => navigate("/addUsuario")} */
                        className='ronded bg-slate-600 text-white px-6 py-2 font-semibold m-3'>
                        Adicionar Contrato de Locação
                    </button>

                    <a
                        _target="_blank"
                        href='http://localhost:8081/contratoLocacao/pdf'
                        className='ronded bg-green-500 text-white px-8 py-2 font-semibold'
                    >
                        Gerar PDF
                    </a>

                </div>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <AddContratoLocacao />
                        </div>
                    </div>
                </div>


                <div className='flex shadow border-b'>

                    <table className='min-w-full'>
                        <thead className="bg-gray-50">
                            <tr>
                                <th className='text-left font-medium text-gray-500 py-3 px-6'>ID CONTRATO:</th>
                                <th className='text-left font-medium text-gray-500 py-3 px-6'>ID Imóvel:</th>
                                <th className='text-right font-medium text-gray-500 py-3 px-6'>Locação *Dias* </th>
                                <th className='text-right font-medium text-gray-500 py-3 px-6'>Valor da Locação </th>
                                <th className='text-right font-medium text-gray-500 py-3 px-6'>CheckIn </th>
                                <th className='text-right font-medium text-gray-500 py-3 px-6'>CheckOut </th>
                                <th className='text-right font-medium text-gray-500 py-3 px-6'>Qtde Pessoas* </th>
                                <th className='text-right font-medium text-gray-500 py-3 px-6'>Ações </th>
                                
                            </tr>
                        </thead>

                        {!carregando && (
                            <tbody className='bg-white'>
                                {contratosLocacao.map((contratoLocacao) => (
                                    <ContratoLocacao
                                        contratoLocacao={contratoLocacao}
                                        deleteContratoLocacao={deleteContratoLocacao}
                                        key={contratoLocacao.id}></ContratoLocacao>
                                ))}
                            </tbody>
                        )}

                    </table>

                </div>

            </div>

        </>
    )

}

export default ListContratoLocacao;