
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
					<Route path="/imoveis" element={<ListarImoveis />} />
					{/* <Route path="/imoveis/:id" element={<DetalhesImovel />} /> */}
					<Route path="/imoveis/:id/" element={<TelaImovel />} />
					<Route path="/imoveis/cadastrar" element={<CadastrarImovel />}/>
					<Route path="/login" element={<Login />} />
					<Route path="/registro" element={<Registro />} />
					<Route path="/usuario/recuperar" element={<RecuperarSenha />} />
					<Route path="/perfil" element={<Perfil />} />
					<Route path="/concluir-cadastro" element={<ConcluirCadastroPessoa />} />
				</Routes>
			</FlatUpContext.Provider>
		</BrowserRouter>
	);
}

export default App;
