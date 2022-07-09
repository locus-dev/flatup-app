import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import SideBar from './components/SideBar/SideBar'
import AddImovel from './components/Imovel/AddImovel';
import ListImovel from './components/Imovel/ListImovel';
import AtualizarImovel from './components/Imovel/AtualizarImovel';

import AddUsuario from './components/Usuario/AddUsuario';
import ListUsuario from './components/Usuario/ListUsuario';
import AtualizarUsuario from './components/Usuario/AtualizarUsuario';
import Home from './components/Home/Home';


import AddContratoLocacao from './components/ContratoLocacao/AddContratoLocacao';
import ListContratoLocacao from './components/ContratoLocacao/ListContratoLocacao';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <SideBar /> */}
        <Home />
        <Routes>
          
          <Route path="/ListarImoveis"  element={<ListImovel />}></Route>
          <Route path="/addImovel" element={<AddImovel />}></Route>
          <Route path="/editarImovel/:id" element={<AtualizarImovel/>}></Route>


          <Route path="/ListarUsuarios"  element={<ListUsuario />}></Route>
          <Route path="/addUsuario" element={<AddUsuario />}></Route>
          <Route path="/editarUsuario/:id" element={<AtualizarUsuario/>}></Route>


          <Route path="/ListarContratosLocacao"  element={<ListContratoLocacao />}></Route>
          <Route path="/addContratoLocacao" element={<AddContratoLocacao />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
