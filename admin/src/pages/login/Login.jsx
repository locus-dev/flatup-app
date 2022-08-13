import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import { AuthContext } from "../../context/AuthContext";
import "./login.scss";
import LoginService from '../../services/login/LoginService';

import FlatUpContext from '../../../src/context/FlatUpContext';
//import { ContextoUsuario } from '../../App'

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");



    const navigate = useNavigate();



    //const contexto = useContext(ContextoUsuario);

    const [userData, setUserData] = useContext(FlatUpContext);

    return (
        
        <div className="jumbotron jumbotron-fluid">
            
            {/* <Navbar /> */}

            <main>

                <div className="side-form">

                    <div>
                        
                        {/* <form action={config.URL + '/auth'} method="POST"> */}
                        <div className="form-control">
                            <label className="lsOptionText" for="email">
                                Email{" "}
                            </label>
                            <input
                                type="email"
                                min={0}
                                value={email}
                                name="email"
                                className="campo"
                                placeholder="Email"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label className="lsOptionText" for="senha">
                                Senha
                            </label>
                            <input
                                type="password"
                                min={0}
                                value={senha}
                                name="senha"
                                className="campo"
                                placeholder="Senha"
                                id="senha"
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>


                        <button
                            // type="submit"
                            className="form-button"
                            onClick={() => {
                                axios
                                    .post(process.env.REACT_APP_API_URL + `/auth/login`, {
                                        email: email,
                                        senha: senha,
                                    })
                                    .then((data) => {
                                        setUserData({ userToken: data.data.token });
                                        navigate("/home");
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }}
                        >
                            Entrar
                        </button>
                        {/* </form> */}

                    </div>
                </div>

                <img
                    alt="Coqueiros"
                    src="./media/assets/image-login.jpg"
                    className="other-side"
                />
            </main>
        </div>
    );
};

export default Login;