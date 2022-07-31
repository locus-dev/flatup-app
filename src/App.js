
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastrarImovel from "./pages/flat/cadastrarImovel/CadastrarImovel";
import Immobile from "./pages/flat/immobile/Immobile";
import List from "./pages/flat/list/List";
import Home from "./pages/home/Home";
import Forgot from "./pages/user/forgot/Forgot";
import Login from "./pages/user/login/Login";
import Profile from "./pages/user/profile/Profile";
import ConcluirCadastroPessoa from "./pages/user/profile/ConcluirCadastroPessoa";
import Register from "./pages/user/register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import FlatUpContext from './components/context/FlatUpContext';
import { useContext, useState } from "react";

const App = () => {

	let context = useContext(FlatUpContext);

	const [userData, setUserData] = useState(context);
	

	return (
		<BrowserRouter>
			<FlatUpContext.Provider value={[userData, setUserData]}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/imoveis" element={<List />} />
					<Route path="/imoveis:id" element={<Immobile />} />
					<Route path="/imoveis/cadastrar" element={<CadastrarImovel />}/>
					<Route path="/login" element={<Login />} />
					<Route path="/registro" element={<Register />} />
					<Route path="/usuario/recuperar" element={<Forgot />} />
					<Route path="/perfil" element={<Profile />} />
					<Route path="/concluir-cadastro" element={<ConcluirCadastroPessoa />} />
					<Route path="/perfil" element={<Profile />} />
					<Route path="/perfil" element={<Profile />} />
				</Routes>
			</FlatUpContext.Provider>
		</BrowserRouter>
	);
}

export default App;
