import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImovelService from "../../services/ImovelService";



const AtualizarImovel = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [endereco, setEndereco] = useState({
        logradouro: '',
        bairro: '',
        pontoReferencia: '',
        cep: '',
        idPessoaFK: null,
        numero: '',
        complemento: '',
        uf: '',
        nacionalidade: ''
    })

    const [imovel, setImovel] = useState({
        idImovel: id,
        climatizado: "",
        statusOcupacao: '',
        idEnderecoFK: {
            logradouro: '',
            bairro: '',
            pontoReferencia: '',
            cep: '',
            idPessoaFK: '',
            numero: '',
            complemento: '',
            uf: '',
            nacionalidade: ''
        },
        quantQuarto: '',
        areaLazer: '',
        areaM2: '',
        piscina: '',
        quantSuite: ''
    });
   
    const handleChange = (e) => {
        const value = e.target.value;
        setImovel({ ...imovel, [e.target.name]: value });
    };

    const handleEnderecoChange = (e) => {
        const value = e.target.value;
        setEndereco({ ...endereco, [e.target.name]: value });
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ImovelService.buscarImovelPeloId(id);
                console.log(id)
                setImovel(response.data);

            } catch (error) {
                console.log(error);
            }
            
        };
        fetchData();
    }, [id]);


    const atualizarImovel = (e) => {
        e.preventDefault();

        const imovelAtualizado = {

            climatizado: imovel.climatizado,
            statusOcupacao: imovel.statusOcupacao,
            idEnderecoFK: {
                logradouro: imovel.idEnderecoFK.logradouro,
                bairro: imovel.idEnderecoFK.bairro,
                pontoReferencia: imovel.idEnderecoFK.pontoReferencia,
                cep: imovel.idEnderecoFK.cep,
                idPessoaFK: imovel.idEnderecoFK.idPessoaFK,
                numero: imovel.idEnderecoFK.numero,
                complemento: imovel.idEnderecoFK.complemento,
                uf: imovel.idEnderecoFK.uf,
                nacionalidade: imovel.idEnderecoFK.nacionalidade
            },
            quantQuarto: imovel.quantQuarto,
            areaLazer: imovel.areaLazer,
            areaM2: imovel.areaM2,
            piscina: imovel.piscina,
            quantSuite: imovel.quantSuite
        }

        ImovelService.atualizarImovel(imovelAtualizado, id)
            .then((response) => {
                navigate("/ListarImoveis");
            }).catch((error) => {
                console.log(error);
            });
    };


    return (
        <div className="flex max-w-2xl mx-auto shadow border-b atualizarImovel">
            <div className='px-8 py-8'>
                <div className='font-thin text-2xl tracking-wider'>
                    <h1>Atualizar Imovel climatizado: {imovel.climatizado} </h1>
                </div>
                <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Climatizado:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={imovel.climatizado}
                        name='climatizado'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Status Da Ocupação:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={imovel.statusOcupacao}
                        name='statusOcupacao'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Endereço:</label>
                    <label className='block text-gray-600 text-sm font-normal'>Logradouro:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={imovel.idEnderecoFK.logradouro}
                        name='logradouro'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Bairro:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={imovel.idEnderecoFK.bairro}
                        name='bairro'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Ponto de Referência:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={imovel.idEnderecoFK.pontoReferencia}
                        name='pontoReferencia'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>CEP:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={imovel.idEnderecoFK.cep}
                        name='cep'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                {/* <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Pessoa:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        name='pessoa'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div> */}
                <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Número:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={imovel.idEnderecoFK.numero}
                        name='numero'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Complemento:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={imovel.idEnderecoFK.complemento}
                        name='complemento'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>UF:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={imovel.idEnderecoFK.uf}
                        name='uf'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Nacionalidade:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={imovel.idEnderecoFK.nacionalidade}
                        name='nacionalidade'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Qtde de Quartos*:</label>
                    <input
                        type="number"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={imovel.quantQuarto}
                        name='quantQuarto'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Area de Lazer*:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={imovel.areaLazer}
                        name='areaLazer'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Area M2*:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={imovel.areaM2}
                        name='areaM2'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Piscina:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={imovel.piscina}
                        name='piscina'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>
                <div className='items-center justify-center h-14 w-full'>
                    <label className='block text-gray-600 text-sm font-normal'>Qtde suíte*:</label>
                    <input
                        type="text"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={imovel.quantSuite}
                        name='quantSuite'
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                </div>

                <div className='items-center justify-center h-14 w-full my-5 space-x-2 pt-4'>
                    <button onClick={atualizarImovel} className='rounded text-white font-semibold bg-green-400 hover:bg-green-600 py-2 px-2'>Salvar</button>
                    <button onClick={() => navigate("/ListarImoveis")} data-bs-dismiss="modal" className='rounded text-white font-semibold bg-red-400 hover:bg-red-600 py-2 px-2'>Cancelar</button>
                </div>
            </div>
        </div>
    )

}

export default AtualizarImovel;