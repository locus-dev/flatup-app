import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import SideBar from './components/SideBar'
import AddImovel from './components/Imovel/AddImovel';
import ListImovel from './components/Imovel/ListImovel';
import AtualizarImovel from './components/Imovel/AtualizarImovel';

function App() {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/ListarImoveis"  element={<ListImovel />}></Route>
          <Route path="/addImovel" element={<AddImovel />}></Route>
          <Route path="/editarImovel/:id" element={<AtualizarImovel/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
