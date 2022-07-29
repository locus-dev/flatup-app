import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config";

import "./navbar.css";
import { useContext } from "react";
import { ContextoUsuario } from "../../App";

const Navbar = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate("/login", { state: {} });
	};

	const handleRegister = () => {
		navigate("/registro", { state: {} });
	};

	const handleHome = () => {
		navigate("/", { state: {} });
	};

	const contexto = useContext(ContextoUsuario);

	return (
		<div className="navegacao">
			<div className="navContainer">
				<span className="logo" onClick={handleHome}>
					FlatApp
				</span>
				<div className="navItems">
					<div className="search-box">
						<input
							type="text"
							name=""
							placeholder="Para onde ir"
							id=""
						/>

						<div
							className="icon"
							onClick={() => {
								axios
									.get(config.URL + "/imovel/listar", {
										headers: {
											Authorization:
												"Bearer " + contexto.token,
										},
									})
									.then((resposta) => {
										navigate("/imoveis"
										//, {
											// state: {
											// 	token: contexto.token,
											// 	dados: resposta,
											// },
										//}
										);
									})
									.catch(
										navigate("/imoveis", {
											state: { token: contexto.token },
										})
									);
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-search"
								viewBox="0 0 16 16"
							>
								<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
							</svg>
						</div>
					</div>

					{/* {console.log(props.token)} */}
					{contexto.token ? (
						<>
							<img
								id="icone-perfil"
								src="./media/assets/perfil.png"
								onClick={() =>
									navigate("/perfil", {
										state: { token: contexto.token },
									})
								}
							></img>
						</>
					) : (
						<>
							<button
								className="navButton"
								id="loginButton"
								onClick={handleLogin}
							>
								Entrar
							</button>
							<button
								className="navButton"
								id="cadastroButton"
								onClick={handleRegister}
							>
								Cadastro
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
