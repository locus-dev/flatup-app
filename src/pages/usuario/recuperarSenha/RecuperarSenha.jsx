import "./recuperarSenha.css";
import Navbar from "../../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Forgot = ({navigate}) => {

  const recuperar = () => {
		navigate("/", { state: {} });
	};

  return (
    <div>
      <main>

      <Navbar />
        <div className="side-form">
          <div className="form-box">
            
            <div className="form-control">
              <h3>Esqueceu Senha</h3><br></br>
              <label className="lsOptionText" for="email"> {" "} <input type="email" min={0} placeholder="Email" id="email" /> </label>
              <button type="submit" onClick={recuperar} className="form-button">Recuperar</button>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  )
}

export default Forgot