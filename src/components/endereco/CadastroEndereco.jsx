import { useState, useEffect, useContext } from "react";
import FlatUpContext from "../context/FlatUpContext";
import axios from "axios";
import Mapa from "../mapa/Mapa";
import BotaoLocalizacao from "../botaoLocalizacao/BotaoLocalizacao";
import "./cadastroEndereco.css";

const CadastroEndereco = ({ funcao }) => {
	const [userData, setUserData] = useContext(FlatUpContext);

	const [bairro, setBairro] = useState("");
	const [cep, setCep] = useState("");
	const [complemento, setComplemento] = useState("");
	const [logradouro, setLogradouro] = useState("");
	const [numero, setNumero] = useState("");
	const [ponto_referencia, setPonto_referencia] = useState("");
	const [uf, setUf] = useState("");
	const [cidade, setCidade] = useState("");

	const [geolocalizacao, setGeolocalizacao] = useState([]);

	const [usarGps, setUsarGps] = useState(null);

	const [listaUF, setListaUF] = useState([]);
	const [listaCidade, setListaCidade] = useState([]);

	function salvarLocalizacao(enderecoId) {
		axios
			.post(
				`${process.env.REACT_APP_API_URL}/localizacao/salvar`,
				{
					latitude: geolocalizacao[0],
					longitude: geolocalizacao[1],
					endereco_id: enderecoId,
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
			.catch((error) => {
				console.log(error);
			});
	}

	function registroEndereco(pessoaId) {
		console.log(`PessoaId: ${pessoaId}`);
		axios
			.post(
				`${process.env.REACT_APP_API_URL}/endereco/salvar`,
				{
					bairro: bairro,
					cep: cep,
					cidade: cidade,
					complemento: complemento,
					logradouro: logradouro,
					numero: numero,
					pessoa_id: pessoaId,
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
				setUserData((prevState) => ({
					...prevState,
					userEnderecoId: result.data.endereco_id,
					municipio: result.data.cidade,
				}));
				salvarLocalizacao(result.data.endereco_id);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function salvarEndereco() {
		axios
			.get(
				process.env.REACT_APP_API_URL +
					`/pessoa/possui-user/${userData.userId}`,
				{
					headers: {
						Authorization: `Bearer ${userData.userToken}`,
					},
				}
			)
			.then((data) => {
				registroEndereco(data.data.pessoa_id);
			})
			.catch((err) => {
				console.log(`Erro ao consultar: ${err}`);
			});
	}

	var estado = [];

	const definirCoordenadas = (coordenadas) => {
		console.log(`coordenadas: ${coordenadas}`);
		setGeolocalizacao(coordenadas);
	};

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

	function selectUF(sigla) {
		console.log(sigla);

		listaUF.forEach((uf) => {
			if (uf.sigla === sigla) {
				estado = sigla;
			}
		});
		selectCidade(estado);
	}

	function selectCidade(estado) {
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
					placeholder="Ex: Rua Colibri "
					maxLength="100"
					type="text"
					name="logradouro"
					onChange={(e) => {
						setLogradouro(String(e.target.value));
					}}
				/>
			</div>

			<div className="d-flex justify-content-between">
				<div
					className="d-flex flex-column mb-3"
					style={{ width: "45%" }}
				>
					<label className="exampleInputEmail1">Número</label>
					<input
						className="input"
						placeholder="Ex: 127"
						maxLength="9"
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
						placeholder="Ex: Casa"
						maxLength="100"
						type="text"
						name="complemento"
						onChange={(e) => {
							setComplemento(String(e.target.value));
						}}
					/>
				</div>
			</div>
			<div className=" d-flex flex-column mb-3">
				<label className="exampleInputEmail1">CEP</label>
				<input
					className="input"
					placeholder="Ex: 13165-000"
					maxLength="11"
					type="text"
					name="cep"
					onChange={(e) => {
						setCep(String(e.target.value));
					}}
				/>
			</div>
			<div className=" d-flex flex-column mb-3">
				<label className="exampleInputEmail1">Bairro</label>
				<input
					className="input"
					placeholder="Ex: Sucupira"
					maxLength="100"
					type="text"
					name="bairro"
					onChange={(e) => {
						setBairro(String(e.target.value));
					}}
				/>
			</div>
			<div className=" d-flex flex-column mb-3">
				<label className="exampleInputEmail1">
					Ponto de Referência
				</label>
				<input
					className="input"
					placeholder="Ex: Casa de Pedro"
					maxLength="100"
					type="text"
					name="pt_referencia"
					onChange={(e) => {
						setPonto_referencia(String(e.target.value));
					}}
				/>
			</div>

			<div className="d-flex mb-3 justify-content-between">
				<div
					className=" d-flex flex-column mr-3"
					style={{ width: "45%" }}
				>
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
					<select className="input select" name="cidade">
						<option selected>Selecione sua cidade</option>
						{listaCidade.map((item) => {
							return (
								<option
									value={item.nome}
									onClick={(e) => {
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
				<label className="exampleInputEmail1 mb-3">
					Marque sua localização no mapa
				</label>
				<div>
					{usarGps ? (
						<Mapa
							coord={
								geolocalizacao ? geolocalizacao : [-34.92, -8.2]
							}
							modoExibicao={false}
							usarGps={usarGps}
							funcao={definirCoordenadas}
						/>
					) : (
						<Mapa
							coord={[-34.92, -8.2]}
							modoExibicao={false}
							funcao={definirCoordenadas}
						/>
					)}
				</div>
				<div>
					<BotaoLocalizacao funcao={definirCoordenadas} />
					<span className="exampleInputEmail1">Usar GPS</span>
				</div>
			</div>
			<br></br>
			<button
				type="button"
				className="btn btn-primary w-100"
				onClick={() => {
					salvarEndereco();
				}}
			>
				{" "}
				Cadastrar Endereço
			</button>
		</div>
	);
};

export default CadastroEndereco;
