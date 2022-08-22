import Footer from "../../../../components/footer/Footer";
import Navbar from "../../../../components/navbar/Navbar";
import FeaturedProperties from "../../../../components/featuredProperties/FeaturedProperties";
import { useLocation } from "react-router-dom";
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
        <div style={{display: "hidden"}} id="sucesso">
            {/* <span onClick={()=>{setLiga("")}} id="close">X</span> */}
            <div>
            <h1>Reserva registrada</h1>
            <p>Sua reserva foi registrada com sucesso!</p>
            </div>
        </div>
    </>
    )
};

export default MinhasLocacoes;