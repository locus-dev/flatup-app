import "./detalhesImovel.css"
import React from 'react'
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import MailList from "../../../components/mailList/MailList";
import Navbar from '../../../components/navbar/Navbar'
import SearchItem from "../../../components/searchItem/SearchItem"
import ImovelCard from "../../../components/ImovelCard/ImovelCard"
import Space from "../../../components/space/Space"
import { useLocation } from "react-router-dom";

const Immobile = () => {
  const location = useLocation();

  return (
    <main>

      <Navbar />
      <ImovelCard props={location.state.props} outrosDados={location.state.outrosDados}/>
        
    </main>
  )
}

export default Immobile