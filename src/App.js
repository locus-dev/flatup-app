import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastrarImovel from "./pages/flat/cadastrarImovel/CadastrarImovel";
import Immobile from "./pages/flat/immobile/Immobile";
import List from "./pages/flat/list/List";
import Home from "./pages/home/Home";
import Forgot from "./pages/user/forgot/Forgot";
import Login from "./pages/user/login/Login";
import Profile from "./pages/user/profile/Profile";
import Register from "./pages/user/register/Register";
import TelaImovel from "./pages/flat/telaImovel/telaImovel";

const ContextoUsuario = createContext(null);

function App() {
	const [token, setToken] = useState(null);

  function SettarToken (novoToken) {
    setToken(novoToken)
  }

	return (
		<BrowserRouter>
			<ContextoUsuario.Provider value={{token, setToken}}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/imoveis" element={<List />} />
					<Route path="/imoveis:id" element={<Immobile />} />
					<Route path="/imoveis/cadastrar" element={<CadastrarImovel />}/>
					<Route path="/login" element={<Login />} />
					<Route path="/registro" element={<Register />} />
					<Route path="/usuario/recuperar" element={<Forgot />} />
					<Route path="/perfil" element={<Profile />} />
					<Route path="/telaImovel" element={<TelaImovel />} />
				</Routes>
			</ContextoUsuario.Provider>
		</BrowserRouter>
	);
}

export { ContextoUsuario, App };
