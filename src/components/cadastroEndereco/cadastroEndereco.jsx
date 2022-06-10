import { useState, useEffect } from "react";
import axios from "axios";

const cadastroEndereco = () => {
	const [UF, setUF] = useState({});
	const [cidade, setCidade] = useState({});

	useEffect(() => {
		axios
			.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
			.then((resposta) => {
				setUF(resposta);
			})
			.catch();

		axios
			.get(
				"https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF.id}/municipios"
			)
			.then((resposta) => {
				setCidade(resposta);
			})
			.catch();
	}, []);

	function buscarCep() {
		// Implementar depois
	}

	function selectUF() {
		// Implementar depois
	}

	function selectCidade() {
		// Implementar depois
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
			type="text"
			<div>
				<label>Cidade</label>
				{/* <input type="text" name="cidade"/> */}
				<select name="cidade">
					<option></option>
				</select>
			</div>
			<div>
				<label>CEP</label>
				<input type="text" name="" />
				<button onClick={buscarCep()}>Buscar CEP</button>
			</div>
			<div>
				<label>UF</label>
				{/* <input type="text" name="uf"/> */}
				<select name="uf" value={UF}>
					<option></option>
				</select>
			</div>
			{/* <div>
			<label>País</label>
			<input type="text" name="nacionalidade"/>
		</div> */}
		</div>
	);
};

export default cadastroEndereco;
