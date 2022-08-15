// import API from "../../../services/API";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
	FacebookAuthProvider,
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import "./recuperarSenha.css";
import FlatUpContext from "../../../components/context/FlatUpContext";
import { useContext } from "react";

// App.SettarToken("fnfnfn")
const Forgot = ({navigate}) => {
  
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

  const recuperar = () => {
		navigate("/", { state: {} });
	};

	return (
		<div>

			<main>
			{/* <Navbar /> */}
				<div className="side-form">
					<div className="form-box">
						<h1>Recuperar Senha</h1>

						{/* <form action={config.URL + '/auth'} method="POST"> */}
						<div className="login-box d-flex flex-column">
							<div>
								<label className="lsOptionText" for="email">
									{" Email: "}
								</label>
								<input
									className="input-padrao w-100"
									type="email"
									min={0}
									value={email}
									name="email"
									placeholder="Email"
									id="email"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label className="lsOptionText" for="senha">
									{" Senha: "}
								</label>
								<input 
									className="input-padrao w-100"
									type="password"
									min={0}
									value={senha}
									name="senha"
									placeholder="Senha"
									id="senha"
									onChange={(e) => setSenha(e.target.value)}/>
							</div>							
						</div>

						<button
							// type="submit"
							className="form-button"
							onClick={recuperar}
						>
							Enviar
						</button>
						{/* </form> */}
			
					</div>
				</div>

				<img
					alt="Coqueiros"
					src="./media/assets/image-login.jpg"
					className="other-side"
				/>
			</main>
		</div>
	);
};

export default Forgot;
