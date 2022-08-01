import axios from 'axios';

const USUARIO_API_BASE_URL = "http://localhost:8081/usuario";

class UserService {

    salvarUsuario(usuario){
        return axios.post(USUARIO_API_BASE_URL+ "/salvar" + usuario);
    }

    listarUsuarios(){
        return axios.get(USUARIO_API_BASE_URL + "/listar");
    }

    atualizarUsuario(usuario, id){
        return axios.put(USUARIO_API_BASE_URL+ "/editar/" + id, usuario);
    }

    deleteUsuario(id){
        return axios.delete(USUARIO_API_BASE_URL + "/remover/" + id);
    }

    buscarUsuarioPeloId(id){
        return axios.get(USUARIO_API_BASE_URL +"/encontrar/" + id);
    }


}

export default new UsuarioService();