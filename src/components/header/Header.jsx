import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {DateRange} from 'react-date-range'
import {useState} from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns';
import {useNavigate} from 'react-router-dom'

import "./header.css"

const Header = ({type}) => {
  const [destination, setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  })

  const navigate = useNavigate();

  const handleOption =(name, operation)=> {
    setOptions(prev=>{return{
      ...prev, [name]: operation === "i" ? options[name] + 1: options[name] -1,
    };});
  };

  const handleSearch =() =>{
    navigate("/hotels", {state: {destination, date, options}})
  }

  return (
    <div className="header">
      <div className={type ==="list" ? "headerContainer listmode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
          </div>
        </div>
        {type !== "list" && <><h1 className="headerTitle">Está a procura de um flat na beira da praia?</h1>
        <p className="headerDesc">
          Aqui você irá encontrar as melhores possibilidades de flat.
        </p>
        <button className="headerBtn">Login/ Cadastrar</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon"/>
            <input type="text" placeholder="onde voce vai" className="headerSearchInput" onChange={e => setDestination(e.target.value)} />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(
              date[0].startDate, 
              "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && <DateRange 
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
            <span onClick={()=> setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adulto · ${options.children} criança · ${options.room} sala`}</span>
            {openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adulto</span>
                <div className="optionCounter">
                  <button disabled={options.adult <= 0} className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Criança</span>
                <div className="optionCounter">
                  <button disabled={options.children <= 0} className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Sala</span>
                <div className="optionCounter">
                  <button disabled={options.room <= 0} className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Pesquisar</button>
          </div>
        </div> </>}
      </div>
    </div>
  )
}

export default Header