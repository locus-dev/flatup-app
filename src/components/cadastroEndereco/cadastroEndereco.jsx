import { useState, useEffect } from "react";
import axios from "axios";
import uuid from "node-uuid";

const CadastroEndereco = () => {
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
			})
	}

	return (
		<div>
			<div>
				<label>Logradouro</label>
				<input type="text" name="logradouro" />
			</div>
			<div>
				<label>Número</label>
				<input type="text" name="numero" />
			</div>
			<div>
				<label>Complemento</label>
				<input type="text" name="complemento" />
			</div>
			<div>
				<label>Bairro</label>
				<input type="text" name="bairro" />
			</div>
			<div>
				<label>Ponto de Referência</label>
				<input type="text" name="pt_referencia" />
			</div>
			<div>
				<label>CEP</label>
				<div>
					<input type="text" name="cep" />
					{/* <button onClick={buscarCep()}>Buscar CEP</button> */}
				</div>
			</div>
			<div>
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
			<div>
				<label>Cidade</label>
				{/* <input type="text" name="cidade"/> */}
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
			{/* <div>
			<label>País</label>
			<input type="text" name="nacionalidade"/>
		</div> */}
		</div>
	);
};

export default CadastroEndereco;
