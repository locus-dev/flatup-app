import "./detalhesImovel.css"
import React from 'react'
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import MailList from "../../../components/mailList/MailList";
import Navbar from '../../../components/navbar/Navbar'
import SearchItem from "../../../components/searchItem/SearchItem"
import ImovelCard from "../../../components/ImovelCard/ImovelCard"
import Space from "../../../components/space/Space"

const Immobile = () => {

  return (
    <main>

      <Navbar />
      <ImovelCard/>
        
    </main>
  )
}

export default Immobile