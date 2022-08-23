import Footer from "../../../../components/footer/Footer";
import Navbar from "../../../../components/navbar/Navbar";
import FeaturedProperties from "../../../../components/featuredProperties/FeaturedProperties";
import { useLocation } from "react-router-dom";
import './MinhasLocacoes.css'
import { useState } from "react";
import Toast from 'react-bootstrap/Toast';
import Alert from 'react-bootstrap/Alert';

const MinhasLocacoes = () => {
    const location = useLocation();

    function setShow(){
        document.getElementById('sucesso').style.top = '-100px'
    }

    return (
        <>
            <Navbar />
            <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
                <h2 className="mb-4">Histórico de imóveis</h2>
                <FeaturedProperties />
            </div>
            <Alert variant="success" id="sucesso" onClose={() => setShow()} dismissible>
                <Alert.Heading>Sua reserva foi registrada com sucesso!</Alert.Heading>
            </Alert>
        </>
    )
};

export default MinhasLocacoes;