import { ref, getStorage, listAll, getBlob } from "firebase/storage";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import React from "react";
import { Button } from "reactstrap";
import DATA from "../../../DATAFILL";
import app from '../../../config'
import "./pagamento.css"

const Pagamento = () => {

	return (
		<div>
			<Navbar />
			<div className="container">
				<h1 className="exampleInputEmail1">Pagamento</h1>
			</div>
			
		</div>
	);
};

export default Pagamento;
