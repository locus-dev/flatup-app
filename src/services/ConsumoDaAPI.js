import config from "../config";
import axios from "axios";

// ============ Tipos dos parâmetros das funções =============
//      rota: String, parametros: JSON, dados: JSON
export default class ConsumoDaAPI {
	constructor() {}
	get(rota, dados, parametros={}) {
		return axios
			.get(config.URL + rota, (dados.params = parametros))
			.then(function (resposta) {
				return resposta.json;
			})
			.catch();
	}

	post(rota, dados, parametros={}) {
		return axios
			.get(config.URL + rota, (dados.params = parametros))
			.then(function (resposta) {
				return resposta.json;
			})
			.catch();
	}

	put(rota, dados, parametros={}) {
		return axios
			.get(config.URL + rota, (dados.params = parametros))
			.then(function (resposta) {
				return resposta.json;
			})
			.catch();
	}

	delete_(rota, dados, parametros={}) {
		return axios
			.get(config.URL + rota, (dados.params = parametros))
			.then(function (resposta) {
				return resposta.json;
			})
			.catch();
	}

}
