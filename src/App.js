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
import CadastrarImovel from "./pages/flat/immobile/CadastrarImovel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Immobiles" element={<List />} />
        <Route path="/Immobile:id" element={<Immobile />} />
        <Route path="/imovel/cadastrar" element={<CadastrarImovel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
