import config from "../config";
import axios from "axios";
import { useContext } from "react";
import { ContextoUsuario } from "../App";

function CriarInstanciaAxios() {
	const contexto = useContext(ContextoUsuario);

	const API = axios.create({
		baseURL: config.URL,
		defaults: {
			headers: {
				common: {
					"Authorization": `Bearer ${contexto.token}`
				}
			}
		}
	});

	// API.defaults.headers.common["Authorization"] = `Bearer ${contexto.token}`;
    return API;
}

const API = CriarInstanciaAxios()

export default API;

// // ============ Tipos dos parâmetros das funções =============
// //      rota: String, parametros: JSON, dados: JSON
// export default class ConsumoDaAPI {
// 	constructor() {}
// 	get(rota, dados, parametros={}) {
// 		return axios
// 			.get(config.URL + rota, (dados.params = parametros))
// 			.then(function (resposta) {
// 				return resposta.json;
// 			})
// 			.catch();
// 	}

// 	post(rota, dados, parametros={}) {
// 		return axios
// 			.get(config.URL + rota, (dados.params = parametros))
// 			.then(function (resposta) {
// 				return resposta.json;
// 			})
// 			.catch();
// 	}

// 	put(rota, dados, parametros={}) {
// 		return axios
// 			.get(config.URL + rota, (dados.params = parametros))
// 			.then(function (resposta) {
// 				return resposta.json;
// 			})
// 			.catch();
// 	}

// 	delete_(rota, dados, parametros={}) {
// 		return axios
// 			.get(config.URL + rota, (dados.params = parametros))
// 			.then(function (resposta) {
// 				return resposta.json;
// 			})
// 			.catch();
// 	}

// }
