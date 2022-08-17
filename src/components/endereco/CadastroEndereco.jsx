import { useState, useEffect, useContext } from "react";
// import API from "../../services/API";
import axios from "axios";
import uuid from "node-uuid";
import BotaoLocalizacao from "../botaoLocalizacao/BotaoLocalizacao";
import FlatUpContext from "../context/FlatUpContext";
import Mapa from "../mapa/Mapa";
import "./cadastroEndereco.css";

const CadastroEndereco = (props) => {
	const [bairro, setBairro] = useState("");
	const [cep, setCep] = useState("");
	const [complemento, setComplemento] = useState("");
	const [logradouro, setLogradouro] = useState("");
	const [numero, setNumero] = useState("");
	const [pessoa_id, setPessoa_id] = useState(Number);
	const [ponto_referencia, setPonto_referencia] = useState("");
	const [uf, setUf] = useState("");
	const [cidade, setCidade] = useState("");

	const [usarGps, setUsarGps] = useState(null);
	const [geolocalizacao, setGeolocalizacao] = useState([]);

	const [userData, setUserData] = useContext(FlatUpContext);

	function req() {
		console.log(userData);
		axios
			.post(
				`${process.env.REACT_APP_API_URL}/endereco/salvar`,
				{
					bairro: bairro,
					cep: cep,
					complemento: complemento,
					logradouro: logradouro,
					numero: numero,
					pessoa_id: 1,
					ponto_referencia: ponto_referencia,
					uf: uf,
				},
				{
					headers: {
						Authorization: `Bearer ${userData.userToken}`,
					},
				}
			)
			.then((result) => {
				console.log(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	const [listaUF, setListaUF] = useState([]);
	const [listaCidade, setListaCidade] = useState([]);

	var estado = [];
	var municipio = [];

	const definirCoordenadas = (xy) => {
		setGeolocalizacao(xy)
		console.log(geolocalizacao);
	}



	useEffect(() => {
		axios
			.get(
				"https://servicodados.ibge.gov.br/api/v1/localidades/estados",
				{ hearders: { "Access-Control-Allow-Origin": "*" } }
			)
			.then((resposta) => {
				setListaUF(resposta.data);
				console.log(resposta.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	function buscarCep() {
		// Implementar depois
	}

	function selectUF(sigla) {
		console.log(sigla);

		listaUF.forEach((uf) => {
			if (uf.sigla == sigla) {
				estado = sigla;
			}
		});
		selectCidade(estado);
	}

	function selectCidade(estado) {
		// Implementar depois
		axios
			.get(
				`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`,
				{ hearders: { "Access-Control-Allow-Origin": "*" } }
			)
			.then((resposta) => {
				setListaCidade(resposta.data);
				console.log(resposta);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	return (
		<div className="container" id="">
			<div className=" d-flex flex-column mb-3">
				<label className="exampleInputEmail1">Logradouro</label>
				<input
					className="input"
					type="text"
					name="logradouro"
					onChange={(e) => {
						setLogradouro(String(e.target.value));
					}}
				/>
			</div>

			<div className="d-flex">
				<div className="d-flex flex-column w-50  mb-3">
					<label className="exampleInputEmail1">Número</label>
					<input
						className="input"
						type="text"
						name="numero"
						onChange={(e) => {
							setNumero(String(e.target.value));
						}}
					/>
				</div>
				<div className=" d-flex flex-column w-50 mb-3">
					<label className="exampleInputEmail1">Complemento</label>
					<input
						className="input"
						type="text"
						name="complemento"
						onChange={(e) => {
							setComplemento(String(e.target.value));
						}}
					/>
				</div>
			</div>
			<div className=" d-flex flex-column mb-3">
				<label className="exampleInputEmail1">Bairro</label>
				<input
					className="input"
					type="text"
					name="bairro"
					onChange={(e) => {
						setBairro(String(e.target.value));
					}}
				/>
			</div>
			<div className=" d-flex flex-column mb-3">
				<label className="exampleInputEmail1">Ponto de Referência</label>
				<input
					className="input"
					type="text"
					name="pt_referencia"
					onChange={(e) => {
						setPonto_referencia(String(e.target.value));
					}}
				/>
			</div>
			<div className=" d-flex flex-column mb-3">
				<label className="exampleInputEmail1">CEP</label>
				<input
					className="input"
					type="text"
					name="cep"
					onChange={(e) => {
						setCep(String(e.target.value));
					}}
				/>
				{/* <button onClick={buscarCep()}>Buscar CEP</button> */}
			</div>
			<div className="d-flex mb-3">
				<div className=" d-flex flex-column w-50">
					<label className="exampleInputEmail1">UF</label>
					<select className="input select" name="uf">
					<option selected>Selecione seu estado</option>
						{listaUF.map((item, index) => {
							return (
								<option
									key={item.id}
									value={item.id}
									onClick={() => {
										setUf(String(item.sigla));
										selectUF(item.sigla);
									}}
								>
									{item.nome}
								</option>
							);
						})}
					</select>
				</div>
				<div className="  d-flex flex-column w-50">
					<label className="exampleInputEmail1">Cidade</label>
					{/* <input className="input" type="text" name="cidade"/> */}
					<select className="input select" name="cidade">
					<option selected>Selecione sua cidade</option>
						{listaCidade.map((item) => {
							return (
								<option
									value={item.id}
									onChange={(e) => {
										setCidade(String(e.target.value));
									}}
								>
									{item.nome}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			
			<div className="d-flex flex-column">
				<label className="exampleInputEmail1">Geolocalização</label>
				<div>{usarGps ? (
					<Mapa
						coord={geolocalizacao ? geolocalizacao : [-34.92, -8.2]}
						modoExibicao={false}
						usarGps={usarGps}
						funcao={definirCoordenadas}
					/>
					) : (
						<Mapa coord={[-34.92, -8.2]} modoExibicao={false} />
				)}</div>
				<div>
					<input
						name="coord"
						type="checkbox"
						className="form-check-input"
						onChange={() => {
							setUsarGps(true);
						}}
					/>
					{" "}<span className="exampleInputEmail1">Usar GPS</span>
				</div>
			</div>
			{/* <div>
				<BotaoLocalizacao />
			</div> */}
			<br></br>
			<button type="button" className="btn btn-primary" onClick={() => {req();}}> Cadastrar Endereço</button>

			{/* <div className="input">
			<label>País</label>
			<input className="input" type="text" name="nacionalidade"/>
		</div> */}
		</div>
	);
};

export default CadastroEndereco;
