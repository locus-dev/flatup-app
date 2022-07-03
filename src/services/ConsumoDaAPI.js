import config from "../config";
import axios from "axios";

// ============ Tipos dos parâmetros das funções =============
//      rota: String, parametros: JSON, dados: JSON
export default function ConsumoDaAPI() {

	function get(rota, parametros, dados) {
		return axios
			.get(config.URL + rota, (dados.params = parametros))
			.then(function (resposta) {
				return resposta.json;
			})
			.catch();
	}

	function post(rota, parametros, dados) {
		return axios
			.get(config.URL + rota, (dados.params = parametros))
			.then(function (resposta) {
				return resposta.json;
			})
			.catch();
	}

	function put(rota, parametros, dados) {
		return axios
			.get(config.URL + rota, (dados.params = parametros))
			.then(function (resposta) {
				return resposta.json;
			})
			.catch();
	}

	function delete_(rota, parametros, dados) {
		return axios
			.get(config.URL + rota, (dados.params = parametros))
			.then(function (resposta) {
				return resposta.json;
			})
			.catch();
	}

}
