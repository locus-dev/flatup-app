import React from 'react'
import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import FlatUpContext from '../../../components/context/FlatUpContext';
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/navbar/Navbar'
import "./profile.css"

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userData, setUserData] = useContext(FlatUpContext);

  return (
    <div className="classe">
      <Navbar/>
      <div id="aqui">
        <div>
          <button onClick={() => navigate("/concluir-cadastro")}>Conclua seu cadastro</button>
          <img src='./media/assets/perfil.png' width="130" height="130"></img>
        </div>
        <div>
          <input type="text" className="input" name="nome" value="Joaquim Aguiar"/>
          <input type="text" className="input" name="telefone" value="(81) 91564-6452"/>
          <input type="text" className="input" name="data_nascimento" value="07/06/2000"/>
          <input type="text" className="input" name="cpf" value="453.654.584-98"/>
          <button onClick={() => navigate("/imoveis/cadastrar")}>Cadastrar Imóvel</button>
          <button onClick={() => {
            setUserData({})
            navigate("/")
            }}>Log out</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile