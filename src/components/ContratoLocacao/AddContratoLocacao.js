import React, { useState, useEffect } from 'react';
import ContratoLocacaoService from '../../services/ContratoLocacaoService';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddContratoLocacao = () => {
    const navigate = useNavigate();

    const [opcaoImovel, setOpcaoImovel] = useState('');

    const [imoveis, setImoveis] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/imovel/listar').then(response => {
            //console.log(response.data);
            setImoveis(response.data)
        })
    }, [])

    const [contratoLocacao, setContratoLocacao] = useState({
        idImovelFK: '',
        diasLocacao: '',
        valorLocacao: '',
        checkIn: '',
        checkOut: '',
        quantPessoa: ''
    });


    const handleChange = (e) => {
        const value = e.target.value;
        setContratoLocacao({ ...contratoLocacao, [e.target.name]: value });
    }

    const salvarContratoLocacao = (e) => {
        e.preventDefault();

        const contratoLocacaoMontado = {
            idImovelFK: Number(opcaoImovel),
            diasLocacao: contratoLocacao.diasLocacao,
            valorLocacao: contratoLocacao.valorLocacao,
            checkIn: contratoLocacao.checkIn,
            checkOut: contratoLocacao.checkOut,
            quantPessoa: contratoLocacao.quantPessoa
        }

        ContratoLocacaoService.salvarContratoLocacao(contratoLocacaoMontado).then((response) => {
            navigate('/ListarContratosLocacao')
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='flex max-w-5xl mx-auto shadow border-b addUsuario'>
            <div className='px-10 py-10 columns-1'>
                <div className='font-thin text-2xl tracking-wider'>
                    <h1>Adicionar Contrato De Locação </h1>
                </div>
                <div className='items-center justify-center h-20 w-full'>
                    <div className='mt-2'>
                        <label className='block text-gray-600 text-sm font-normal'>ID do imóvel:</label>
                    </div>
                    <div className='mt-2'>
                        <select className='w-80' onChange={e => setOpcaoImovel({ ...opcaoImovel, id: e.target.value })}>
                            {imoveis.map((imovel) => (
                                <option key={imovel.idImovel} value={imovel.idImovel} >{imovel.idImovel}</option>
                            ))}
                        </select>
                    </div>
                    
                </div>
                <div className='items-center justify-center h-20 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Dias da Locação:</label>
                    <input
                        type="number"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        name='diasLocacao'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-20 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Valor da Locação:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        name='valorLocacao'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-20 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Check In:</label>
                    <input
                        type="datetime-local"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        name='checkIn'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-20 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Check Out:</label>
                    <input
                        type="datetime-local"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        name='checkOut'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>

                <div className='items-center justify-center h-20 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Qtde De Pessoas*:</label>
                    <input
                        type="number"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        name='quantPessoa'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>

                <div className='items-center justify-center h-14 w-full my-5 space-x-2 pt-6'>
                    <button onClick={salvarContratoLocacao} className='rounded text-white font-semibold bg-green-400 hover:bg-green-600 py-2 px-2'>Salvar</button>
                    <button onClick={() => navigate("/ListarContratosLocacao")} data-bs-dismiss="modal" className='rounded text-white font-semibold bg-red-400 hover:bg-red-600 py-2 px-2'>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default AddContratoLocacao;