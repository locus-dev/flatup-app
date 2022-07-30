import { useState, useEffect } from "react";
// import API from "../../services/API";
import axios from "axios";
import uuid from "node-uuid";
import BotaoLocalizacao from "../botaoLocalizacao/BotaoLocalizacao";

const CadastroEndereco = (props) => {
	const [listaUF, setListaUF] = useState([]);
	const [listaCidade, setListaCidade] = useState([]);
	// const [UF, setUF] = useState([]);

	var UF = [];
	var cidade = [];

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
				UF = sigla;
			}
		});
		selectCidade(UF);
	}

	function selectCidade(UF) {
		// Implementar depois
		axios
			.get(
				`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`,
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
		<div className="form-body">
			<div className="form-control">
				<label>Logradouro</label>
				<input className="input" type="text" name="logradouro" />
			</div>
			<div className="form-control">
				<label>Número</label>
				<input className="input" type="text" name="numero" />
			</div>
			<div className="form-control">
				<label>Complemento</label>
				<input className="input" type="text" name="complemento" />
			</div>
			<div className="form-control">
				<label>Bairro</label>
				<input className="input" type="text" name="bairro" />
			</div>
			<div className="form-control">
				<label>Ponto de Referência</label>
				<input className="input" type="text" name="pt_referencia" />
			</div>
			<div className="form-control">
				<label>CEP</label>
				<input className="input" type="text" name="cep" />
				{/* <button onClick={buscarCep()}>Buscar CEP</button> */}
			</div>
			<div className="form-control">
				<label>UF</label>
				<select name="uf">
					{listaUF.map((item, index) => {
						return (
							<option
								key={item.id}
								value={item.id}
								onClick={() => {
									selectUF(item.sigla);
								}}
							>
								{item.nome}
							</option>
						);
					})}
				</select>
			</div>
			<div className="form-control">
				<label>Cidade</label>
				{/* <input className="input" type="text" name="cidade"/> */}
				<select name="cidade">
					{listaCidade.map((item) => {
						return <option value={item.id}>{item.nome}</option>;
					})}
				</select>
			</div>
			<div>
				<BotaoLocalizacao />
			</div>
			{/* <div className="form-control">
			<label>País</label>
			<input className="input" type="text" name="nacionalidade"/>
		</div> */}
		</div>
	);
};

export default CadastroEndereco;
