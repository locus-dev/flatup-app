import "./register.css"
import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'

const Register = () => {

  return (
    <div>
      <Navbar />
        <Header />
          <div className="listContainer">
            <div className="listWrapper">
              <div className="listSearch">
                <h1 className="lsTitle">Cadastrar</h1> 
                <div className="lsItem">
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Nome</span>
                      <input type="text" className="lsOptionInput" />
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Sobrenome</span>
                      <input type="text" min={0} className="lsOptionInput"/>
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Email </span>
                      <input type="text" min={0} className="lsOptionInput"/>
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Senha</span>
                      <input type="text" min={0} className="lsOptionInput"/>
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Confirmar Senha</span>
                      <input type="text" min={0} className="lsOptionInput"/>
                    </div>
                    <div className="lsOptionItem">
                    <button className="navButton">Cadastrar</button>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Register