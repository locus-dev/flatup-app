
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
import MinhasLocacoes from "./pages/usuario/perfil/locacoes/MinhasLocacoes";
import MeusImoveis from "./pages/usuario/perfil/host/MeusImoveis";
import FlatUpContext from './components/context/FlatUpContext';
import { useContext, useState } from "react";
import Pagamento from "./pages/imoveis/pagamento/Pagamento";
import DetalhesImovel from "./pages/imoveis/detalhesImovel/DetalhesImovel"

const App = () => {

	let context = useContext(FlatUpContext);

	const [userData, setUserData] = useState(context);
	

	return (
		<BrowserRouter>
			<FlatUpContext.Provider value={[userData, setUserData]}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/imoveis" element={<ListarImoveis />} />
					<Route path="/imoveis/:id/" element={<TelaImovel />} />
					<Route path="/imoveis/:id/confirmar-reserva" element={<DetalhesImovel />} />
					<Route path="/imoveis/cadastrar" element={<CadastrarImovel />}/>
					<Route path="/login" element={<Login />} />
					<Route path="/registro" element={<Registro />} />
					<Route path="/usuario/recuperar" element={<RecuperarSenha />} />
					<Route path="/concluir-cadastro" element={<ConcluirCadastroPessoa />} />
					<Route path="/perfil" element={<Perfil />} />
					<Route path="/perfil/locacoes" element={<MinhasLocacoes />} />
					<Route path="/perfil/host/imoveis" element={<MeusImoveis />} />
					<Route path="/pagamento" element={<Pagamento />} />
				</Routes>
			</FlatUpContext.Provider>
		</BrowserRouter>
	);
}

export default App;
