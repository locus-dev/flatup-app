import URL from 'settings'
import axios from 'axios'

function salvarUsuario (usuario) {
    return axios.post(URL+"", "dados")
    .then(function (resposta) {
        return resposta.data
    })
    .catch();
}