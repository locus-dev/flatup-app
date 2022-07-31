import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import CadastrarImovel from "./pages/imoveis/cadastrarImovel/CadastrarImovel";
import DetalhesImovel from "./pages/imoveis/detalhesImovel/DetalhesImovel";
import ListarImoveis from "./pages/imoveis/listarImoveis/ListarImoveis";
import Login from "./pages/usuario/login/Login";
import ConcluirCadastroPessoa from "./pages/usuario/perfil/ConcluirCadastroPessoa";
import Perfil from "./pages/usuario/perfil/Perfil";
import RecuperarSenha from "./pages/usuario/recuperarSenha/RecuperarSenha";
import Registro from "./pages/usuario/registro/Registro";
import TelaImovel from "./pages/imoveis/telaImovel/telaImovel";

const ContextoUsuario = createContext(null);

function App() {
	const [token, setToken] = useState(null);
	const [localizacao, setLocalizacao] = useState(null);

	return (
		<BrowserRouter>
			<ContextoUsuario.Provider value={{token, setToken, localizacao, setLocalizacao}}>
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
			</ContextoUsuario.Provider>
		</BrowserRouter>
	);
}

export { ContextoUsuario, App };

