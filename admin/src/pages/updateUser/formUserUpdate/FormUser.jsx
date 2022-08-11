import "../newUser.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import FlatUpContext from '../../../../src/context/FlatUpContext';
import axios from "axios";



const FormUser = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        id: id,
        email: '',
        senha: ''
    });
    
    const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(process.env.REACT_APP_API_URL + `/usuario/encontrar/${user.id}`);
                setUser(response.data);

            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const atualizarUser = (e) => {
        e.preventDefault();
        console.log(user);
        axios.put(process.env.REACT_APP_API_URL + `/usuario/editar/${id}` + user, {
            headers: {
                'Authorization':
                    `Bearer ${userData.userToken}`,
                'Access-Control-Allow-Origin':
                    '*'
            },
        })
            .then((response) => {
                navigate("/users");
            }).catch((error) => {
                console.log(error);
            });
    };


    const location = useLocation();
    location.state = location.state ? location.state : {};

    const [userData, setUserData] = useContext(FlatUpContext);
    

 

    


    return (
        <>
            <div className="top">
                <h1>Atualizar Usuário</h1>
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
                                    onChange={(e) => handleChange(e)}
                                    min={0}
                                    value={user.email}
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
                                    onChange={(e) => handleChange(e)}
                                    min={0}
                                    value={user.senha}
                                    className="input"
                                    placeholder="Senha"
                                    id="senha"
                                    name="senha"
                                />
                            </div>
                            <button
                                // type="submit"
                                className="botaoSalvar"
                                onClick={atualizarUser}

                                    // Cadastra o Usuário
                                    /* axios
                                        .post(process.env.REACT_APP_API_URL + `/usuario/salvar`, {
                                            email: email,
                                            senha: senha,
                                        }) */
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

                             /*            navigate("/users")
                                        .catch((erro) => {
                                            console.log(erro);
                                        });
                                }} */
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