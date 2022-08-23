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
import { TablePagination, TableSortLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "axios";


import MaterialTable from "material-table";

const ListUsers = () => {

    const location = useLocation();


    const [userData, setUserData] = useContext(FlatUpContext);

   
    const navigate = useNavigate();

    
    const [usuarios, setUsuarios] = useState([]);






    useEffect(() => {
        const fetchData = async () => {
            
            try {

                const response = await axios.get(process.env.REACT_APP_API_URL + `/usuario/listar`, {
                    headers: {
                        'Authorization':
                            `Bearer ${userData.userToken}`,
                        'Access-Control-Allow-Origin':
                            '*'
                    },
                    data: userData.userToken
                })
                setUsuarios(response.data);

            } catch (error) {
                console.log(error);
            }
            
        };
        fetchData();
    }, []);

    const GERAROPDFPO = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/usuario/pdf', {
            headers: {
                'Authorization':
                    `Bearer ${userData.userToken}`,
                'Access-Control-Allow-Origin':
                    '*'
            },
            responseType: 'blob'

        })
            /* const pdfContents = response.data
            await writeFile('file.pdf', pdfContents); */

            .then((response) => {
                window.open(URL.createObjectURL(response.data))
                console.log(response)
            }).catch((err) => {
                console.log(err)
            })
        console.log('lascou' + response)

    }

    const handlePDF = () => {
        GERAROPDFPO();
    }

    const deleteUsuario = (e, id) => {
        e.preventDefault();
        (id).then((res) => {
            if (usuarios) {
                setUsuarios((prevElement) => {
                    return prevElement.filter((usuario) => usuario.idUsuario !== id);
                });
            }
        });
    };




  

    return (

        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />

                <div className='botaoPDF'>

                  {/*   <button


                        onClick={() => navigate("/users/new")}
                        className='botaoAdd '>
                        Adicionar Usuário
                    </button> */}

                    <button
                        _target="_blank"
                        onClick={GERAROPDFPO}
                        //href="{process.env.REACT_APP_API_URL + '/usuario/pdf'} "
                        className='botaoGerarPDF '
                    >

                        Gerar PDF
                    </button>

                </div>

                <div className="newContainer">
                    <TableContainer component={Paper} className="table">
                        <Table sx={{ minWidth: 450 }} aria-label=" table">
                            <TableHead />

                            <TableRow >

                                <TableCell className="tableCell">


                                    ID

                                </TableCell>
                                <TableCell className="tableCell">

                                    E-mail

                                </TableCell>
                                <TableCell className="tableCell" >

                                    Senha

                                </TableCell>
                                {/* <TableCell className="tableCell">Ações</TableCell> */}

                            </TableRow>





                            <TableBody>
                                {usuarios

                                    .map((usuario) => (
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
