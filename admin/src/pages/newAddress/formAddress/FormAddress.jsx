import { useState, useEffect } from "react";

import axios from "axios";

const FormAddress = (props) => {
	const [listaUF, setListaUF] = useState([]);
	const [listaCidade, setListaCidade] = useState([]);
	// const [UF, setUF] = useState([]);

	var UF = [];
	var cidade = [];

	useEffect(() => {
		axios
			.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
			.then((resposta) => {
				setListaUF(resposta.data);
			}).catch((error) => {
				console.log(error);
			});
	}, []);

	function buscarCep() {
		// Implementar depois
	}

	function selectUF(id) {
		// Implementar depois
		UF = listaUF[id];
		// console.log(UF)
		selectCidade(UF)
	}

	function selectCidade(UF) {
		// Implementar depois
		axios
			.get(
				`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF.sigla}/municipios`
			)
			.then((resposta) => {
				setListaCidade(resposta.data);
				// console.log(listaCidade)
			}).catch((error) => {
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
					{listaUF.map((item) => {
						return (
							<option key={item.id} value={item.id} onClick={() => {selectUF(item.id)}}>
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
						return (
							<option value={item.id}>
								{item.nome}
							</option>
						);
					})}
				</select>
			</div>
			{/* <div className="form-control">
			<label>País</label>
			<input className="input" type="text" name="nacionalidade"/>
		</div> */}
		</div>
	);
};

export default FormAddress;