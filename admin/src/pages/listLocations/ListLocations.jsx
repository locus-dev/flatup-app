import FormLocation from "./formLocation/FormLocation";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlatUpContext from "../../context/FlatUpContext"
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const ListLocations = () => {

    const location = useLocation();
   

    const [userData, setUserData] = useContext(FlatUpContext);

    console.log(userData.userToken + 'asdasda');
    const navigate = useNavigate();

    const [carregando, setCarregando] = useState(true);
    const [usuarios, setUsuarios] = useState([]);

    



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
                    data: userData.userToken
                })
                setUsuarios(response.data);

            } catch (error) {
                console.log(error);
            }
            setCarregando(false);
        };
        fetchData();
    }, []);

    const GERAROPDFPO = () => {
        axios.get(process.env.REACT_APP_API_URL + '/usuario/pdf')
        console.log('lascou')
        return navigate("/users")
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

                   {/*  <button


                        onClick={() => navigate("/users/new")}
                        className='botaoAdd '>
                        Adicionar Usuário
                    </button> */}

                    <a
                        _target="_blank"
                        
                        href='http://ip172-18-0-41-cbr4nvi44gtg008h8lfg-8081.direct.labs.play-with-docker.com/locacao/pdf'
                        className='botaoGerarPDF '
                    >
                        Gerar PDF
                    </a>

                </div>

                <div className="newContainer">



                    {/* <TableContainer component={Paper} className="table">
                        <Table sx={{ minWidth: 450 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>

                                    <TableCell className="tableCell">ID</TableCell>
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

                    </TableContainer> */}

                    <FormLocation />
                </div>
            </div>
        </div>


    )
}



export default ListLocations;