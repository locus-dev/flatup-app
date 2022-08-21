import { ref, getStorage, listAll, getBlob } from "firebase/storage";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import React from "react";
import FeaturedProperties from "../../../components/featuredProperties/FeaturedProperties";
import Footer from "../../../components/footer/Footer";
import { Button } from "reactstrap";
import DATA from "../../../DATAFILL";
import app from '../../../config'
import "./pagamento.css"

const Pagamento = () => {

	return (
		<>
        <Navbar />
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{height: "100vh"}}>
            <h2 className="mb-4">Pagamento</h2>
            <FeaturedProperties />
        </div>
        <Footer/>
    </>
	);
};

export default Pagamento;
