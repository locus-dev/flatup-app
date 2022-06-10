import {useNavigate} from 'react-router-dom';

import "./navbar.css"

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogin =() =>{
      navigate("/login", {state: {}})
  }

  const handleRegister =() =>{
    navigate("/register", {state: {}})
} 

const handleHome =() =>{
  navigate("/", {state: {}})
} 

  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo" onClick={handleHome}>FlatApp</span>
            <div className="navItems">
                <button className="navButton" id="loginButton" onClick={handleLogin}>Entrar</button>
                <button className="navButton" id="cadastroButton" onClick={handleRegister}>Cadastro</button>
                <miniBar/>
            </div>
        </div>
    </div>
  )
}

export default Navbar