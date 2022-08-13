import "../listPartners/listPartners.scss";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FlatUpContext from "../../context/FlatUpContext"
import Sidebar from '../../../src/components/sidebar/Sidebar'
import Navbar from '../../../src/components/navbar/Navbar'
import NewPartner from "../newPartner/NewPartner";
import { useNavigate } from "react-router-dom";

import Datatable from "../../components/datatable/Datatable";


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Partner from "./Partner";

const ListPartners = () => {

    const location = useLocation();
    location.state = location.state ? location.state : {};

    const [userData, setUserData] = useContext(FlatUpContext);

    console.log(userData);
    const navigate = useNavigate();

    const [carregando, setCarregando] = useState(true);
    const [partners, setPartners] = useState([]);




    useEffect(() => {
        const fetchData = async () => {
            setCarregando(true);
            try {

                const response = await axios.get(process.env.REACT_APP_API_URL + `/parceiro/listar`, {
                    headers: {
                        'Authorization':
                            `Bearer ${userData.userToken}`,
                        'Access-Control-Allow-Origin':
                            '*'
                    },
                    data: userData
                })
                setPartners(response.data);

            } catch (error) {
                console.log(error);
            }
            setCarregando(false);
        };
        fetchData();
    }, []);

    
    
    const deletePartner = (e, id) => {
        e.preventDefault();
        (id).then((res) => {
            if (partners) {
                setPartners((prevElement) => {
                    return prevElement.filter((partner) => partner.id !== id);
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

                    {/* <button


                        onClick={() => navigate("/partners/new")}
                        className='botaoAdd '>
                        Adicionar Parceiro
                    </button> */}

                    <a
                        _target="_blank"
                        onClick={() => { const d = axios.get('http://localhost:8081/parceiro/pdf', {
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

                                    <TableCell className="tableCell">Descrição</TableCell>
                                    <TableCell className="tableCell">Nome Fantasia</TableCell>
                                    <TableCell className="tableCell">CNPJ</TableCell>
                                    {/* <TableCell className="tableCell">Ações</TableCell> */}

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {partners.map((partner) => (
                                    <Partner
                                        partner={partner}
                                        deletePartner={deletePartner}
                                        key={partner.id} >

                                    </Partner>
                                ))}

                            </TableBody>

                        </Table>

                    </TableContainer>
                </div>
            </div>
        </div>


    )
}



export default ListPartners;