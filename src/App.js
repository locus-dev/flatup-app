
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import RecuperarSenha from "./pages/usuario/recuperarSenha/RecuperarSenha";
import Login from "./pages/usuario/login/Login";
import Perfil from "./pages/usuario/perfil/Perfil";
import ConcluirCadastroPessoa from "./pages/usuario/perfil/ConcluirCadastroPessoa";
import Registro from "./pages/usuario/registro/Registro";
import ListarImoveis from "./pages/imoveis/listarImoveis/ListarImoveis";
import CadastrarImovel from "./pages/imoveis/cadastrarImovel/CadastrarImovel";
import TelaImovel from "./pages/imoveis/telaImovel/TelaImovel";
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
