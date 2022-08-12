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
import "./login.css";
import FlatUpContext from "../../../components/context/FlatUpContext";
import { useContext } from "react";

// App.SettarToken("fnfnfn")
const Login = () => {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	const firebaseConfig = {
		apiKey: "AIzaSyAdfLPSnZEzmyvvQpJB_2z2yij8I9ZL0u8",
		authDomain: "flatup-e23c8.firebaseapp.com",
		projectId: "flatup-e23c8",
		storageBucket: "flatup-e23c8.appspot.com",
		messagingSenderId: "293462764439",
		appId: "1:293462764439:web:984942318223cbe2ac32d2",
	};

	const navigate = useNavigate();

	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);

	const google = new GoogleAuthProvider();
	const facebook = new FacebookAuthProvider();

	function login() {
		axios
			.post(process.env.REACT_APP_API_URL + `/auth/login`, {
				email: email,
				senha: senha,
			})
			.then((data) => {
				setUserData({
					userToken: data.data.token,
				});
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function socialLogin(provedor) {
		signInWithPopup(auth, provedor).then((result) => {
			const credential = GoogleAuthProvider.credentialFromResult(result);

			const token = credential.accessToken;
			const user = result.user;
			// console.log(token, user);
			console.log(user.email);
			console.log(user.uid);
			axios
				.post(process.env.REACT_APP_API_URL + "/auth/oauth", {
					email: user.email,
					google_id: user.uid,
				})
				.then((data) => {
					console.log(data);
					setUserData({
						userToken: data.data.token,
					});
					navigate("/");
				})
				.catch((err) => {
					console.log(err);
				});
		});
	}

	const [userData, setUserData] = useContext(FlatUpContext);

	return (
		<div>
			{/* <Navbar /> */}
			<main>
				{/* <Navbar /> */}
				<div className="side-form">
					<div className="form-box">
						<h1>Login</h1>
						<p>Fazer login como:</p>
						<div className="login-socialbox">
							<button
								className="login-social"
								id="google"
								type="button"
								onClick={() => {
									socialLogin(google);
								}}
							>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-google"
										viewBox="0 0 16 16"
									>
										<path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
									</svg>
								</span>{" "}
								<span>Google</span>{" "}
							</button>

							<button
								onClick={() => {
									socialLogin(facebook);
								}}
								className="login-social"
								type="button"
								id="facebook"
							>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-facebook"
										viewBox="0 0 16 16"
									>
										<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
									</svg>
								</span>{" "}
								<span>Facebook</span>{" "}
							</button>
						</div>

						<h3 className="or">Ou</h3>
						{/* <form action={config.URL + '/auth'} method="POST"> */}
						<div className="deladinho">
							<div className="form-control">
								<label className="lsOptionText" for="email">
									{" "}
								</label>
								<input
									type="email"
									min={0}
									value={email}
									name="email"
									placeholder="Email"
									id="email"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="form-control">
								<label className="lsOptionText" for="senha">
									{" "}
									<input 
									type="password"
									min={0}
									value={senha}
									name="senha"
									placeholder="Senha"
									id="senha"
									onChange={(e) => setSenha(e.target.value)}
								/>
								</label>
							</div>
						</div>
						<a href="/usuario/recuperar" id="forgot-senha">
							Esqueci a senha
						</a>

						<button
							// type="submit"
							className="form-button"
							onClick={login}
						>
							Entrar
						</button>
						{/* </form> */}
						<p className="registre">
							Ainda não tem conta?{" "}
							<a href="/registro">Registre-se</a>
						</p>
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

export default Login;
