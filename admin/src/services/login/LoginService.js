import axios from "axios";

const AUTH_URL = "http://localhost:8081"

class LoginService {

    autenticar(usuario) {
        return axios.post(AUTH_URL + "/auth", usuario)
    }


}

export default new LoginService();