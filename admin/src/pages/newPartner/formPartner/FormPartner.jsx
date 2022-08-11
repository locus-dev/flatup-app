import "../newPartner.scss";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";
import FlatUpContext from "../../../context/FlatUpContext"



const FormPartner = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const [userData, setUserData] = useContext(FlatUpContext);


    const [users, setUsers] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8081/usuario/listar').then(response => {
            setUsers(response.data);
        });
    }, []);

    const [user, setUser] = useState({
        idUsuario: ''
    })

    const handleUserChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });
    };

    const [partner, setPartner] = useState({
        descricao: '',
        nomeFantasia: '',
        cnpj: ''
        
    })


    const handleChange = (e) => {
        setPartner((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick =  (e) => {
        e.preventDefault();
        const partnerMounted = {
            descricao: partner.descricao,
            nomeFantasia: partner.nomeFantasia,
            cnpj: partner.cnpj,
            idUsuarioFK: {
                idUsuario: user.idUsuario
            }
        }
       
        axios.post(process.env.REACT_APP_API_URL + `/parceiro/salvar`, partnerMounted);
        console.log(partnerMounted.idUsuarioFK.idUsuario + 'EITA OLHA O OBJETO MONTADO PO PARCEIRO')
        navigate("/partners")
       
    };


    return (
        <>
            <div className="top">
                <h1>Adicionar Parceiro</h1>
            </div>
            <div className="bottom">
                <div className="right">
                    <form>
                        <div className="formInput">
                            <div className="form-control">
                                <label className="lsOptionText" for="descricao">
                                    Descrição{" "}
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) => handleChange(e)}
                                 
                                    value={partner.descricao}
                                    className="input"
                                    placeholder="descricao"
                                    id="descricao"
                                    name="descricao"
                                />
                            </div>
                            <div className="form-control">
                                <label className="lsOptionText" for="nomeFantasia">
                                    Nome Fantasia{" "}
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) => handleChange(e)}
                                   
                                    value={partner.nomeFantasia}
                                    className="input"
                                    placeholder="nomeFantasia"
                                    id="nomeFantasia"
                                    name="nomeFantasia"
                                />
                            </div>
                            <div className="form-control">
                                <label className="lsOptionText" for="cnpj">
                                    CNPJº{" "}
                                </label>
                                <input
                                    type="number"
                                    onChange={(e) => handleChange(e)}

                                    value={partner.cnpj}
                                    className="input"
                                    placeholder="cnpj"
                                    id="cnpj"
                                    name="cnpj"
                                />
                            </div>
                            <div className='items-center  h-12 py-10 w-full mt-3'>
                                <div className='mt-2'>
                                    <label className='mt-5'>Usuário:</label>
                                </div>
                                <div className='mt-2'>
                                    <select className='w-80' onChange={handleUserChange}>
                                        {users.map((user) => (
                                            <option key={user.id} value={user.id}>{user.email}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <button
                                // type="submit"
                                className="botaoSalvar"
                                onClick={handleClick}
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

                                
                                    //() => {

                                    // Cadastra o Parceiro
                                    //axios
                                    //.post(process.env.REACT_APP_API_URL + `/parceiro/salvar`, 
                                    //{ headers: { 'Authorization': `Bearer ${userData.userToken}` } 
                                    //})
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

                                    
                                       /*  .catch((erro) => {
                                            console.log(erro);
                                        }); */
                                
                            >
                            Registrar
                        </button>

                        <button className="botaoCancelar" onClick={() => navigate("/partners")}>Cancelar</button>


                </div>



            </form>
        </div>
            </div >
        </>
    )
}

export default FormPartner;