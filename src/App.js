import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Immobile from "./pages/flat/immobile/Immobile";
import List from "./pages/flat/list/List";
import Login from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";
import Profile from "./pages/user/profile/Profile";
import Forgot from "./pages/user/forgot/Forgot";
import CadastrarImovel from "./pages/flat/cadastrarImovel/CadastrarImovel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imoveis" element={<List />} />
        <Route path="/imoveis:id" element={<Immobile />} />
        <Route path="/imoveis/cadastrar" element={<CadastrarImovel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/usuario/recuperar" element={<Forgot/>} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
