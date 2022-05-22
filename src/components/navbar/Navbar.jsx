import "./navbar.css"

const Navbar = ({ navigation }) => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">FlatApp</span>
            <div className="navItems">
                <button className="navButton" title="Ir para tela de Cadastro" onPress={() => navigation.navigate('register')}>Cadastro</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar