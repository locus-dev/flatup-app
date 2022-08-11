import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FlatUpContext from "../../context/FlatUpContext"
import Sidebar from '../../../src/components/sidebar/Sidebar'
import Navbar from '../../../src/components/navbar/Navbar'
//import NewHotel from '../newUser/NewUser'

import { useNavigate } from "react-router-dom";


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";


const ListHotels = () => {

    const location = useLocation();


    const navigate = useNavigate();

    const [userData, setUserData] = useContext(FlatUpContext);

    const [carregando, setCarregando] = useState(true);
    const [imoveis, setImoveis] = useState([]);

    const gerarPDF = () => {
        const config = {
            headers: { Authorization: `Bearer ${userData.userToken}` }
        }


        const resposta = axios.get(process.env.REACT_APP_API_URL + `/imovel/pdf`, { headers: { 'Authorization': `Bearer ${userData.userToken}` } })


    }


    useEffect(() => {
        const fetchData = async () => {
            setCarregando(true);
            try {
                const response = await axios.get(process.env.REACT_APP_API_URL + `/imovel/listar`, {
                    headers: {
                        'Authorization':
                            `Bearer ${userData.userToken}`,

                        'Access-Control-Allow-Origin':
                            '*'
                    },
                    data: userData
                })
                setImoveis(response.data);

            } catch (error) {
                console.log(error);
            }
            setCarregando(false);
        };
        fetchData();
    }, []);


    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div className='container'>

                    <button


                        onClick={() => navigate("/hotels/new")}
                        className='botaoAdd '>
                        Adicionar Imovel
                    </button>

                    <a
                        _target="_blank"
                        
                        href='http://localhost:8081/imovel/pdf'
                        className='botaoGerarPDF '
                    >
                        Gerar PDF
                    </a>

                </div>

                <div className="newContainer">



                    <TableContainer component={Paper} className="table">
                        <Table sx={{ minWidth: 350 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="tableCell">ID</TableCell>
                                    <TableCell className="tableCell">Climatizado</TableCell>
                                    <TableCell className="tableCell">Status Da Ocupação</TableCell>
                                    <TableCell className="tableCell">Endereço</TableCell>
                                    <TableCell className="tableCell">Qtde De Quartos</TableCell>
                                    <TableCell className="tableCell">Área De Lazer</TableCell>
                                    <TableCell className="tableCell">Área m²</TableCell>
                                    <TableCell className="tableCell">Possui Piscina?</TableCell>
                                    <TableCell className="tableCell">Qtde De Suítes</TableCell>


                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {imoveis.map((imovel) => (
                                    <TableRow key={imovel.id}>
                                        <TableCell className="tableCell">{imovel.idImovel}</TableCell>
                                        <TableCell className="tableCell">{imovel.climatizado}</TableCell>
                                        <TableCell className="tableCell">{imovel.statusOcupacao}</TableCell>
                                        <TableCell className="tableCell">{imovel.idEnderecoFK.bairro}</TableCell>
                                        <TableCell className="tableCell">{imovel.quantQuarto}</TableCell>
                                        <TableCell className="tableCell">{imovel.areaLazer}</TableCell>
                                        <TableCell className="tableCell">{imovel.areaM2}</TableCell>
                                        <TableCell className="tableCell">{imovel.piscina}</TableCell>
                                        <TableCell className="tableCell">{imovel.quantSuite}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default ListHotels;