import "./list.css"
import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from "react-router-dom"
import { format } from 'date-fns';
import { useState } from "react"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"

const List = () => {

  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);

  const [openDate, setOpenDate] = useState(false);

  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Pesquisar</h1>
            <div className="lsItem">
              <label>Destino</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Data do Check-In</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}

              </span>
              {openDate && (<DateRange onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />)}
            </div>
            <div className="lsItem">
              <label>Opções</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Preço Mínimo <small>Por Temporada</small></span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Preço Máximo <small>Por Temporada</small></span>
                  <input type="number" min={0} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adulto </span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.adult} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Criança</span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Salas</span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.room} />
                </div>
              </div>
            </div>
              <button>Pesquisar</button>
            <div className="listResult">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List