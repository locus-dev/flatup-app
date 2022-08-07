import "./listUsers.scss";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FlatUpContext from "../../context/FlatUpContext"
import Sidebar from '../../../src/components/sidebar/Sidebar'
import Navbar from '../../../src/components/navbar/Navbar'
import NewUser from '../newUser/NewUser'
import { useNavigate } from "react-router-dom";
import User from '../listUsers/User'
import Datatable from "../../components/datatable/Datatable";


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const ListUsers = () => {

    const location = useLocation();
    location.state = location.state ? location.state : {};

    const [userData, setUserData] = useContext(FlatUpContext);

    console.log(userData);
    const navigate = useNavigate();

    const [carregando, setCarregando] = useState(true);
    const [usuarios, setUsuarios] = useState([]);

    console.log(usuarios)



    useEffect(() => {
        const fetchData = async () => {
            setCarregando(true);
            try {

                const response = await axios.get(process.env.REACT_APP_API_URL + `/usuario/listar`, {
                    headers: {
                        'Authorization':
                            `Bearer ${userData.userToken}`,
                        'Access-Control-Allow-Origin':
                            '*'
                    },
                    data: userData
                })
                setUsuarios(response.data);

            } catch (error) {
                console.log(error);
            }
            setCarregando(false);
        };
        fetchData();
    }, []);

    
    
    const deleteUsuario = (e, id) => {
        e.preventDefault();
        (id).then((res) => {
            if (usuarios) {
                setUsuarios((prevElement) => {
                    return prevElement.filter((usuario) => usuario.id !== id);
                });
            }
        });
    };



    return (

        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div className='container'>

                    <button


                        onClick={() => navigate("/users/new")}
                        className='botaoAdd '>
                        Adicionar Usuário
                    </button>

                    <a
                        _target="_blank"
                        onClick={() => { const d = axios.get('http://localhost:8081/usuario/pdf', {
                            headers: {
                                'Authorization':
                                    `Bearer ${userData.userToken}`,
                                'Access-Control-Allow-Origin':
                                    '*'
                            },
                            data: userData
                        }
                        )}}
                        //href='http://localhost:8081/usuario/pdf'
                        className='botaoGerarPDF '
                    >
                        Gerar PDF
                    </a>

                </div>

                <div className="newContainer">



                    <TableContainer component={Paper} className="table">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>

                                    <TableCell className="tableCell">E-mail</TableCell>
                                    <TableCell className="tableCell">Senha</TableCell>
                                    <TableCell className="tableCell">Ações</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {usuarios.map((usuario) => (
                                    <User
                                        usuario={usuario}
                                        deleteUsuario={deleteUsuario}
                                        key={usuario.id} >

                                    </User>
                                ))}

                            </TableBody>

                        </Table>

                    </TableContainer>
                </div>
            </div>
        </div>


    )
}



export default ListUsers;