import "./table.scss";
import Table from "@mui/material/Table";
import {useContext} from 'react';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useLocation } from 'react-router-dom';
import { useState, useEffect} from "react";
import axios from "axios";
import FlatUpContext from "../../context/FlatUpContext"

const List = () => {

  const [userData, setUserData] = useContext(FlatUpContext);

  

  const[contratoLocacao, setContratoLocacao] = useState([])
 

  const location = useLocation();

  const locacao = {
    contrato_locacao_id: location.state.locacoes.contrato_locacao_id,
    idLocacao: location.state.locacoes.idLocacao,
    checkIn: location.state.locacoes.checkIn,
    checkOut: location.state.locacoes.checkOut,
    diasLocacao: location.state.locacoes.diasLocacao,
    valorLocacao: location.state.locacoes.valorLocacao,
    quantPessoa: location.state.locacoes.quantPessoa,
    
  }

  //console.log(locacao.contrato_locacao_id + 'AQUI È A PARADINHAss')

  console.log(locacao.valorLocacao + 'HUYE')

  

  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    }

  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Check In</TableCell>
            <TableCell className="tableCell">Check Out</TableCell>
            <TableCell className="tableCell">Dias Reservado</TableCell>
            <TableCell className="tableCell">Valor</TableCell>
            <TableCell className="tableCell">Qtde de Pessoas*</TableCell>
            <TableCell className="tableCell">Forma de Pagamento</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow>
              <TableCell className="tableCell">{locacao.idLocacao}</TableCell>
              {/* <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell> */}
              <TableCell className="tableCell">{locacao.checkIn}</TableCell>
              <TableCell className="tableCell">{locacao.checkOut}</TableCell>
              <TableCell className="tableCell">{locacao.diasLocacao}</TableCell>
              <TableCell className="tableCell">{locacao.valorLocacao}</TableCell>
              <TableCell className="tableCell">{locacao.quantPessoa}</TableCell>
             {/*  <TableCell className="tableCell">{contrato.valorLocacao}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell> */}
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
