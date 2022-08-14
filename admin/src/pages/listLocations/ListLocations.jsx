import FormLocation from "./formLocation/FormLocation";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlatUpContext from "../../context/FlatUpContext"
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableUsers from './formLocation/components/table/TableUsers'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Location from "./Location";


const ListLocations = () => {

    const location = useLocation();
    location.state = location.state ? location.state : {};

    const [userData, setUserData] = useContext(FlatUpContext);

    console.log(userData.userToken + 'asdasda');
    const navigate = useNavigate();


    const [locacoes, setLocacoes] = useState([]);
   

    console.log(locacoes)



    useEffect(() => {
        const fetchData = async () => {

            try {

                const response = await axios.get(process.env.REACT_APP_API_URL + `/locacao/listar`, {
                    headers: {
                        'Authorization':
                            `Bearer ${userData.userToken}`,
                        'Access-Control-Allow-Origin':
                            '*'
                    },
                    data: userData.userToken
                })
                setLocacoes(response.data);

            } catch (error) {
                console.log(error);
            }

        };
        fetchData();
    }, [locacoes.id]);

    const GERAROPDFPO = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/locacao/pdf', {
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


    /* const deleteUsuario = (e, id) => {
        e.preventDefault();
        (id).then((res) => {
            if (usuarios) {
                setUsuarios((prevElement) => {
                    return prevElement.filter((usuario) => usuario.idUsuario !== id);
                });
            }
        });
    };
 */


    return (

        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div className='botaoPDF'>

                    {/*  <button


                        onClick={() => navigate("/users/new")}
                        className='botaoAdd '>
                        Adicionar Usuário
                    </button> */}

                    <a
                        _target="_blank"
                        onClick={GERAROPDFPO}
                        //href='http://ip172-18-0-41-cbr4nvi44gtg008h8lfg-8081.direct.labs.play-with-docker.com/locacao/pdf'
                        className='botaoGerarPDF '
                    >
                        Gerar PDF
                    </a>

                </div>

                <div className="newContainer">



                    {/*  <TableUsers /> */}
                    <TableContainer component={Paper} className="table">
                        <Table sx={{ minWidth: 400 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>

                                    <TableCell className="tableCell">ID</TableCell>
                                    <TableCell className="tableCell">Nome Usuario</TableCell>
                                    <TableCell className="tableCell">Imóvel</TableCell>
                                    <TableCell className="tableCell">Contrato Locacao</TableCell>
                                    <TableCell className="tableCell">Status Locacao</TableCell>
                                    <TableCell className="tableCell">Ações</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                
                                {locacoes.map((locacao) => (
                                    <Location
                                        locacao={locacao}
                                        
                                        key={locacao.id} >

                                    </Location>
                                ))}
                              
                            </TableBody>

                        </Table>

                    </TableContainer>


                </div>
            </div>
        </div>


    )
}



export default ListLocations;