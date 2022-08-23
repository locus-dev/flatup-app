import Footer from "../../../../components/footer/Footer";
import Navbar from "../../../../components/navbar/Navbar";
import FeaturedProperties from "../../../../components/featuredProperties/FeaturedProperties";
import { useLocation } from "react-router-dom";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import './MinhasLocacoes.css'
import { useState } from "react";

const MinhasLocacoes = () => {
    const location = useLocation();

	return (
    <>
        <Navbar />
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{height: "100vh"}}>
            <h2 className="mb-4">Histórico de imóveis</h2>
            <FeaturedProperties />
        </div>
        {/* <div style={{display: "hidden"}} id="sucesso">
            <span onClick={()=>{setLiga("")}} id="close">X</span> 
            <div>
            <h1>Reserva registrada</h1>
            <p>Sua reserva foi registrada com sucesso!</p>
            </div>
        </div> */}
        <div style={{display: "hidden",minHeight: '240px' }} id="sucesso"
        aria-live="polite"
        aria-atomic="true"
        className="bg-success position-relative"
      >
            <ToastContainer className="p-3" position={'top-end'}>
            <Toast>
                <Toast.Header closeButton={false}>
                </Toast.Header>
                <Toast.Body>Sua reserva foi registrada com sucesso!</Toast.Body>
            </Toast>
            </ToastContainer>
        </div>
    </>
    )
};

export default MinhasLocacoes;