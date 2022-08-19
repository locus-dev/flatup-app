import "./table.scss";
import Table from "@mui/material/Table";
import { useContext } from 'react';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import FlatUpContext from "../../context/FlatUpContext"

const List = () => {

  const [userData, setUserData] = useContext(FlatUpContext);

  

  const location = useLocation();
  location.state = location.state ? location.state : {};


  const asd = {
    id: location.state.locacoes.contrato_locacao_id
  }

  

  
  


  const [contratoLocacao, setContratoLocacao] = useState({
    idLocacao: '',
    checkIn: '',
    checkOut: '',
    diasLocacao: '',
    valorLocacao: '',
    quantPessoa: ''
  })

  const contrato = {
    idLocacao: contratoLocacao.idLocacao,
    checkIn: contratoLocacao.checkIn,
    checkOut: contratoLocacao.checkOut,
    diasLocacao: contratoLocacao.diasLocacao,
    valorLocacao: contratoLocacao.valorLocacao,
    quantPessoa: contratoLocacao.quantPessoa
  }

  console.log(contrato)



  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get(process.env.REACT_APP_API_URL + `/contratolocacao/encontrar/${asd.id}`, {
          headers: {
            'Authorization':
              `Bearer ${userData.userToken}`,
            'Access-Control-Allow-Origin':
              '*'
          },
          data: userData.userToken
        })
        setContratoLocacao(response.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //console.log(locacao.contrato_locacao_id + 'AQUI È A PARADINHAss')








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
          
            <TableRow >
              <TableCell className="tableCell">{contratoLocacao.checkIn}</TableCell>
              <TableCell className="tableCell">{contrato.checkOut}</TableCell>
              <TableCell className="tableCell">{contrato.diasLocacao}</TableCell>
              <TableCell className="tableCell">{contrato.valorLocacao}</TableCell>
              <TableCell className="tableCell">{contrato.quantPessoa}</TableCell>
              <TableCell className="tableCell">{contrato.valorLocacao}</TableCell>
              
            </TableRow>
          


        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
