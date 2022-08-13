import './module.scss'
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlatUpContext from "../../../context/FlatUpContext"
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";


const Module = () => {

    const location = useLocation();
    const [userData, setUserData] = useContext(FlatUpContext);

    const navigate = useNavigate();





    return (

        <div className="list">
            <Sidebar />

            <div className="listContainer">
                <Navbar />
                <div className="lasqeuira">
                    <p80>Locações</p80>
                </div>
                <div className='botaoModulo'>

                    <button


                        onClick={() => navigate("listLocations")}
                        className='botaoAdd '>
                        Locador
                    </button>
                    <button


                        onClick={() => navigate("/users/new")}
                        className='botaoAdd '>
                        Locatário
                    </button>



                </div>


            </div>
        </div>


    )
}



export default Module;