import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./navbar.css";
import { useContext } from "react";
import FlatUpContext from '../context/FlatUpContext';

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

	const [userData, setUserData] = useContext(FlatUpContext);
	const showUserProfileButton = userData.userId > 0;

	return (
		<div className="navegacao">
			<div className="navContainer">
				<img className="logo" src="https://firebasestorage.googleapis.com/v0/b/flatup-e23c8.appspot.com/o/ASSETS%2FMEDIA%2Fflatapp.png?alt=media&token=5e306ba7-83cb-4fcf-a653-83b50cde6f3a" alt="FlatApp" width={80} onClick={handleHome}/>
				<div className="navItems">
					<div className="search-box">
						<input
							className="search-box-input"
							type="text"
							name=""
							placeholder="Para onde ir"
							id=""
						/>

						<div
							className="icon"
							onClick={() => {
								axios
									.get(process.env.REACT_APP_API_URL + "/imovel/listar", {
										headers: {
											Authorization:
												"Bearer " + userData.token,
										},
									})
									.then((resposta) => {
										navigate("/imoveis");
									})
									.catch(
										navigate("/imoveis", {
											state: { token: userData.token },
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
					{showUserProfileButton ? (
						<>
							<img
								id="icone-perfil"
								src="https://firebasestorage.googleapis.com/v0/b/flatup-e23c8.appspot.com/o/ASSETS%2FMEDIA%2Fperfil.png?alt=media&token=8d3ac929-4cbc-4a40-a8ff-a55ec0312fe8"
								alt="Perfil"
								onClick={() =>
									navigate("/perfil", {
											state: { token: userData.userToken },
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
