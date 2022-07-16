import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../../components/footer/Footer'
import Header from '../../../components/header/Header'
import Navbar from '../../../components/navbar/Navbar'
import "./profile.css"

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="classe">
      <Navbar/>
      <div id="aqui">
        <img src='./media/assets/perfil.png' width="130" height="130"></img>
        <div>
          <input type="text" className="input" name="nome" value="Joaquim Aguiar"/>
          <input type="text" className="input" name="telefone" value="(81) 91564-6452"/>
          <input type="text" className="input" name="data_nascimento" value="07/06/2000"/>
          <input type="text" className="input" name="cpf" value="453.654.584-98"/>
          <button onClick={() => navigate("/imoveis/cadastrar", {state:{token:location.state.token}})}>Cadastrar Imóvel</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile