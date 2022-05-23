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

  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">FlatApp</span>
            <div className="navItems">
                <button className="navButton" onClick={handleRegister}>Cadastro</button>
                <button className="navButton" onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar