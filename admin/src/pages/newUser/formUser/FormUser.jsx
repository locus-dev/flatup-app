import "../newUser.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FlatUpContext from '../../../../src/context/FlatUpContext';
import axios from "axios";



const FormUser = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const location = useLocation();
    location.state = location.state ? location.state : {};

    const [userData, setUserData] = useContext(FlatUpContext);
    const navigate = useNavigate();

 

    


    return (
        <>
            <div className="top">
                <h1></h1>
            </div>
            <div className="bottom">

                <div className="right">
                    <form>
                        <div className="formInput">
                            <div className="form-control">
                                <label className="lsOptionText" for="email">
                                    Email{" "}
                                </label>
                                <input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    min={0}
                                    value={email}
                                    className="input"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                />
                            </div>
                            <div className="form-control">
                                <label className="lsOptionText" for="senha">
                                    Senha{" "}
                                </label>
                                <input
                                    type="password"
                                    onChange={(e) => setSenha(e.target.value)}
                                    min={0}
                                    value={senha}
                                    className="input"
                                    placeholder="Senha"
                                    id="senha"
                                    name="senha"
                                />
                            </div>
                            <button
                                // type="submit"
                                className="botaoSalvar"
                                onClick={() => {

                                    // Cadastra o Usuário
                                    axios
                                        .post(process.env.REACT_APP_API_URL + `/usuario/salvar`, {
                                            email: email,
                                            senha: senha,
                                        })
                                        /* .then(() => {

                                            // Faz login
                                            axios
                                                .post(process.env.REACT_APP_API_URL + `/auth`, {
                                                    email: email,
                                                    senha: senha,
                                                })
                                                .then((data) => {
                                                    setUserData({
                                                        userToken: data.data.token,
                                                    });
                                                    navigate("/");
                                                })
                                                .catch((error) => {
                                                    console.log(error);
                                                });
                                        }) */

                                        navigate("/users")
                                        .catch((erro) => {
                                            console.log(erro);
                                        });
                                }}
                            >
                                Registrar
                            </button>

                            <button className="botaoCancelar" onClick={() => navigate("/users")}>Cancelar</button>


                        </div>



                    </form>
                </div>
            </div>
        </>

    );
}


export default FormUser