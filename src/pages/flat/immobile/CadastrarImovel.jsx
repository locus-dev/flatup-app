import "./immobile.css"
import React from 'react'
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import MailList from "../../../components/mailList/MailList";
import Navbar from '../../../components/navbar/Navbar'
import SearchItem from "../../../components/searchItem/SearchItem"

const CadastrarImovel = () => {

  return (
    <div>
      <Navbar />
        <div className="listContainer">
          <SearchItem />
          <MailList />
          <Footer />
        </div>
    </div>
  )
}

export default CadastrarImovel