import "../newHotel.scss";


import axios from "axios";
import { useContext, useState, useEffect } from "react";


import Navbar from "../../../components/navbar/Navbar";

import { useNavigate, useLocation, useParams } from "react-router-dom";
import FlatUpContext from '../../../context/FlatUpContext';



const FormHotel = () => {

    const { id } = useParams();

	const [imovel, setImovel] = useState({
        idImovel: id,
		climatizado: "",
		statusOcupacao: '',
		idEnderecoFK: {
			logradouro: '',
			bairro: '',
			pontoReferencia: '',
			cep: '',
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
	console.log(imovel)


	const handleChange = (e) => {
		const value = e.target.value;
		console.log(value);
		setImovel({ ...imovel, [e.target.name]: value });
	};

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(process.env.REACT_APP_API_URL + `/imovel/encontrar/${imovel.id}`);
                setImovel(response.data);

            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);




	const atualizarImovel = (e) => {
		e.preventDefault();
		
		
		axios.put(process.env.REACT_APP_API_URL + '/imovel/editar' + id, imovel, {
            headers: {
            'Authorization':
                `Bearer ${userData.userToken}`,
            'Access-Control-Allow-Origin':
                '*'
            }
        }) .then((response) => {
            navigate("/hotels");
        }).catch((error) => {
            console.log(error);
        });
	}


	// const location = useLocation();
	const navigate = useNavigate();

	const location = useLocation();
	location.state = location.state ? location.state : {};

	const [userData, setUserData] = useContext(FlatUpContext);


	function rodarCarrossel(sentido) { }

	return (
		<>
			<div className="top">
				<h1>Atualizar Hotel</h1>
			</div>
			<div className="bottom">
				<div className="right">
					<form>
						<div className='formInput'>

							<div className='form-control'>
								<label className='block text-gray-600 text-sm font-normal'>Climatizado:</label>
								<select
									type="select"
									className='input'
									name='climatizado'
									onChange={(e) => handleChange(e)}
								>
									<option value="CLIMATIZADO">Climatizado</option>
									<option value="NAO_CLIMATIZADO">Não Climatizado</option>
								</select>

							</div>
							<div className='form-control'>
								<label className='lsOptionText'>Status Da Ocupação:</label>
								<select
									type="text"
									className='input '
									name='statusOcupacao'
									onChange={(e) => handleChange(e)}
								>
									<option value="OCUPADO">Ocupado</option>
									<option value="DESOCUPADO">Não Ocupado</option>
								</select>
							</div>
							<div className='form-control'>

								<label className='lsOptionText'>Logradouro:</label>
								<input
									type="text"
									className='input'
									name='logradouro'
                                    value={imovel.logradouro}
									onChange={(e) => handleChange(e)}
								>
								</input>
							</div>
							<div className='form-control'>
								<label className='lsOptionText'>Bairro:</label>
								<input
									type="text"
									className='input'
									name='bairro'
                                    value={imovel.bairro}
									onChange={(e) => handleChange(e)}
								>
								</input>
							</div>
							<div className='items-center justify-center h-20 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>Ponto de Referência:</label>
								<input
									type="text"
									className='input'
									name='pontoReferencia'
                                    value={imovel.pontoReferencia}
									onChange={(e) => handleChange(e)}
								>
								</input>
							</div>
							<div className='items-center justify-center h-20 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>CEP:</label>
								<input
									type="text"
									className='input'
									name='cep'
                                    value={imovel.cep}
									onChange={(e) => handleChange(e)}
								>
								</input>
							</div>

							<div className='items-center justify-center h-20 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>Número:</label>
								<input
									type="text"
									className='input'
									name='numero'
                                    value={imovel.numero}
									onChange={(e) => handleChange(e)}
								>
								</input>
							</div>
							<div className='items-center justify-center h-22 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>Complemento:</label>
								<input
									type="text"
									className='input'
									name='complemento'
                                    value={imovel.complemento}
									onChange={(e) => handleChange(e)}
								>
								</input>
							</div>
							<div className='items-center justify-center h-20 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>UF:</label>
								<input
									type="text"
									className='input'
									name='uf'
                                    value={imovel.uf}
									onChange={(e) => handleChange(e)}
								>
								</input>
							</div>
							<div className='items-center justify-center h-20 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>Nacionalidade:</label>
								<input
									type="text"
									className='input'
									name='nacionalidade'
                                    value={imovel.nacionalidade}
									onChange={(e) => handleChange(e)}
								>
								</input>
							</div>
							<div className='items-center justify-center h-20 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>Qtde de Quartos*:</label>
								<input
									type="number"
									className='input'
									name='quantQuarto'
                                    value={imovel.quantQuarto}
									onChange={(e) => handleChange(e)}
								>
								</input>
							</div>
							<div className='items-center justify-center h-20 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>Area de Lazer*:</label>
								<select
									type="text"
									className='input'
									name='areaLazer'
									onChange={(e) => handleChange(e)}
								>
									<option value="true">Sim</option>
									<option value="false">Não</option>
								</select>
							</div>
							<div className='items-center justify-center h-20 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>Area M2*:</label>
								<input
									type="number"
									className='input'
									name='areaM2'
                                    value={imovel.areaM2}
									onChange={(e) => handleChange(e)}
								>
								</input>
							</div>
							<div className='items-center justify-center h-20 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>Piscina:</label>
								<select
									type="text"
									className='input'
									name='piscina'
									onChange={(e) => handleChange(e)}
								>
									<option value="true">Sim</option>
									<option value="false">Não</option>
								</select>
							</div>
							<div className='items-center justify-center h-14 w-full'>
								<label className=''>Qtde suíte*:</label>
								<input
									type="number"
									className='input'
									name='quantSuite'
                                    value={imovel.quantSuite}
									onChange={(e) => handleChange(e)}
								>
								</input>
							</div>
						
								<button onClick={atualizarImovel} className="botaoSalvar">Salvar</button>
								<button onClick={() => navigate("/hotels")} data-bs-dismiss="modal" className="botaoCancelar">Cancelar</button>
							

						</div>
					</form>
				</div>
			</div>
		</>
	);
}


export default FormHotel;