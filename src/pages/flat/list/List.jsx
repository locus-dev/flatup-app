import "./list.css"
import React from 'react'
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import MailList from "../../../components/mailList/MailList";
import Navbar from '../../../components/navbar/Navbar'
import SearchItem from "../../../components/searchItem/SearchItem"

const List = () => {

  return (
    <div>
      <Navbar />
      <Header/> 
        <div className="listContainer">
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <MailList />
          <Footer />
        </div>
    </div>
  )
}

export default List