


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import User from '../../../../listUsers/User'
import Locador from "../Locador";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TableUsers = () => {
    const navigate = useNavigate();

    const [usuarios, setUsuarios] = useState({
        id: 1,
        nome: 'teste da silva',
        email: 'teste@gmail.com',    
        telefone: '88525545',
        endereco: 'Rua Palin Gomes',
        pais: 'Russias'
    })


   /*  const [isShow, setShow] = useState(true);
   
    console.log(usuarios)

    const handleChange  = (event) =>  {
        setUsuarios(event.target.value);
    }

    const handleToggle = () => {
        console.log('ei powww')
        return navigate(
            <>
            <Locador 
            nome={usuarios.nome}
            email={usuarios.email}
            telefone={usuarios.telefone}
            endereco={usuarios.endereco}
            pais={usuarios.pais}
            /> 
            </>
        )
    } */

    const redirectLocador = () => {
        
        return navigate("locationDetails", {state: { usuarios}})
    }

    return (
        <>
            <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 450 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell className="tableCell">ID</TableCell>
                            <TableCell className="tableCell">Locador</TableCell>
                            <TableCell className="tableCell">Imovel</TableCell>
                            <TableCell className="tableCell">Dias *reserva</TableCell>
                            <TableCell className="tableCell">Preço</TableCell>
                            <TableCell className="tableCell">Ações</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow className="tableRow">
                            <button onClick={redirectLocador}>Visualizar</button>
                        </TableRow>
                        
                    </TableBody>

                </Table>

            </TableContainer>
        </>
    )
}

export default TableUsers