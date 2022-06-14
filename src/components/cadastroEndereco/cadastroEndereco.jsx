import { useState, useEffect } from "react";
import axios from "axios";
import uuid from "node-uuid";

const CadastroEndereco = () => {
	const [listaUF, setlistaUF] = useState([]);
	const [UF, setUF] = useState([]);
	const [cidade, setCidade] = useState([]);

	useEffect(() => {
		axios
			.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
			.then((resposta) => {
				setlistaUF(resposta.data);
			});
	}, []);

	function buscarCep() {
		// Implementar depois
	}

	function selectUF(id) {
		// Implementar depois
		setUF(listaUF[id]);
	}

	function selectCidade() {
		// Implementar depois
		axios
			.get(
				`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF.id}/municipios`
			)
			.then((resposta) => {
				setCidade(resposta.data);
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
					{/* {listaUF.map((item) => {
						return (
							<option key={uuid()} value={item.id} onClick={selectUF(item.id)}>
								{item.nome}
							</option>
						);
					})} */}
				</select>
			</div>
			<div>
				<label>Cidade</label>
				{/* <input type="text" name="cidade"/> */}
				<select name="cidade">
					{/* {cidade.map((item) => {
				return (
					<option value={item.id}>
						{item.nome}
					</option>
				);
			})} */}
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
