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
import Hotel from "./Hotel";


const ListHotels = () => {

    const location = useLocation();


    const navigate = useNavigate();

    const [userData, setUserData] = useContext(FlatUpContext);

    const [carregando, setCarregando] = useState(true);



    const[endereco, setEndereco] = useState([])


    const [imoveis, setImoveis] = useState([]);
    

    /* const gerarPDF = () => {
        const config = {
            headers: { Authorization: `Bearer ${userData.userToken}` }
        }


        const resposta = axios.get(process.env.REACT_APP_API_URL + `/imovel/pdf`, { headers: { 'Authorization': `Bearer ${userData.userToken}` } })


    } */

    const GERAROPDFPO = async  () =>   {
        const response =  await axios.get(process.env.REACT_APP_API_URL + '/imovel/pdf',  {
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
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
        
       
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
    }, [imoveis.idImovel]);

    const deleteImovel = (e, id) => {
        e.preventDefault();
        (id).then((res) => {
            if (imoveis) {
                setImoveis((prevElement) => {
                    return prevElement.filter((imovel) => imovel.id !== id);
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

               {/*  <button


                        onClick={() => navigate("/hotels/new")}
                        className='botaoAdd '>
                        Adicionar Imovel
                    </button>  */}

                    <a
                        _target="_blank"
                        onClick={GERAROPDFPO}
                        //href='http://localhost:8081/imovel/pdf'
                        className='botaoGerarPDF '
                    >
                        Gerar PDF
                    </a>

                </div>

                <div className="container">



                    <TableContainer component={Paper} className="table">
                        <Table sx={{ minWidth: 350 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="tableCell">ID</TableCell>
                                    <TableCell className="tableCell">Climatizado</TableCell>
                                    <TableCell className="tableCell">Status Da Ocupação</TableCell>
                                    <TableCell className="tableCell">Endereço *logradouro</TableCell>
                                    <TableCell className="tableCell">Qtde De Quartos</TableCell>
                                    <TableCell className="tableCell">Área De Lazer</TableCell>
                                    <TableCell className="tableCell">Área m²</TableCell>
                                    <TableCell className="tableCell">Possui Piscina?</TableCell>
                                    <TableCell className="tableCell">Qtde De Suítes</TableCell>
                                   {/*  <TableCell className="tableCell">Ações</TableCell> */}


                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {imoveis.map((imovel) => (
                                    <Hotel
                                        imovel={imovel}
                                        deleteImovel={deleteImovel}
                                        key={imovel.id} >

                                    </Hotel>
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
