import "../newHotel.scss";


import axios from "axios";
import { useContext, useState } from "react";


import Navbar from "../../../components/navbar/Navbar";

import { useNavigate, useLocation } from "react-router-dom";
import FlatUpContext from "../../../context/FlatUpContext";
import FormAddress from "../../newAddress/formAddress/FormAddress";


const FormHotel = () => {

	const location = useLocation();
    location.state = location.state ? location.state : {};

    const [userData, setUserData] = useContext(FlatUpContext);
    const navigate = useNavigate();
	console.log(userData.userToken)

	const [endereco, setEndereco] = useState({
		logradouro: '',
		bairro: '',
		pontoReferencia: '',
		cep: '',
		numero: '',
		complemento: '',
		uf: '',
		nacionalidade: ''
	})

	const [imovel, setImovel] = useState({
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



	const handleEnderecoChange = (e) => {
		const value = e.target.value;
		setEndereco({ ...endereco, [e.target.name]: value });
	}


	const salvarImovel = (e) => {
		e.preventDefault();
		const imovelMontado = {
			climatizado: imovel.climatizado,
			statusOcupacao: imovel.statusOcupacao,
			idEnderecoFK: {
				logradouro: endereco.logradouro,
				bairro: endereco.bairro,
				pontoReferencia: endereco.pontoReferencia,
				cep: endereco.cep,
				idPessoaFK: endereco.idPessoaFK,
				numero: endereco.numero,
				complemento: endereco.complemento,
				uf: endereco.uf,
				nacionalidade: endereco.nacionalidade
			},
			quantQuarto: imovel.quantQuarto,
			areaLazer: imovel.areaLazer,
			areaM2: imovel.areaM2,
			piscina: imovel.piscina,
			quantSuite: imovel.quantSuite
		}
		console.log(imovelMontado)
		axios.post(process.env.REACT_APP_API_URL + `/imovel/salvar`, imovelMontado, {
			headers: {
                'Authorization':
                    `Bearer ${userData.userToken}`,
                'Access-Control-Allow-Origin':
                    '*'
            },
			data: userData
		}).then((response) => {

			navigate("/hotels")
		}).catch((error) => {
			console.log(error);
		});
	}


	// const location = useLocation();
	


	function rodarCarrossel(sentido) { }

	return (
		<>
			<div className="top">
				<h1>Adicionar Hotel</h1>
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
									onChange={(e) => handleEnderecoChange(e)}
								>
								</input>
							</div>
							<div className='form-control'>
								<label className='lsOptionText'>Bairro:</label>
								<input
									type="text"
									className='input'
									name='bairro'
									onChange={(e) => handleEnderecoChange(e)}
								>
								</input>
							</div>
							<div className='items-center justify-center h-20 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>Ponto de Referência:</label>
								<input
									type="text"
									className='input'
									name='pontoReferencia'
									onChange={(e) => handleEnderecoChange(e)}
								>
								</input>
							</div>
							<div className='items-center justify-center h-20 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>CEP:</label>
								<input
									type="text"
									className='input'
									name='cep'
									onChange={(e) => handleEnderecoChange(e)}
								>
								</input>
							</div>

							<div className='items-center justify-center h-20 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>Número:</label>
								<input
									type="text"
									className='input'
									name='numero'
									onChange={(e) => handleEnderecoChange(e)}
								>
								</input>
							</div>
							<div className='items-center justify-center h-22 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>Complemento:</label>
								<input
									type="text"
									className='input'
									name='complemento'
									onChange={(e) => handleEnderecoChange(e)}
								>
								</input>
							</div>
							<div className='items-center justify-center h-20 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>UF:</label>
								<input
									type="text"
									className='input'
									name='uf'
									onChange={(e) => handleEnderecoChange(e)}
								>
								</input>
							</div>
							<div className='items-center justify-center h-20 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>Nacionalidade:</label>
								<input
									type="text"
									className='input'
									name='nacionalidade'
									onChange={(e) => handleEnderecoChange(e)}
								>
								</input>
							</div>
							<div className='items-center justify-center h-20 w-full'>
								<label className='block text-gray-600 text-sm font-normal'>Qtde de Quartos*:</label>
								<input
									type="number"
									className='input'
									name='quantQuarto'
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
									onChange={(e) => handleChange(e)}
								>
								</input>
							</div>
						
								<button onClick={salvarImovel} className="botaoSalvar">Salvar</button>
								<button onClick={() => navigate("/hotels")} data-bs-dismiss="modal" className="botaoCancelar">Cancelar</button>
							

						</div>
					</form>
				</div>
			</div>
		</>
	);
}


export default FormHotel;