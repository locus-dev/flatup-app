import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FlatUpContext from "../../../components/context/FlatUpContext";
import axios from "axios";
import "./registro.css";

const Register = () => {
	const [userData, setUserData] = useContext(FlatUpContext);

	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [senhaConfirmacao, setSenhaConfirmacao] = useState("");

	const navigate = useNavigate();

	function login() {
		axios
			.post(process.env.REACT_APP_API_URL + `/auth/login`, {
				email: email,
				senha: senha,
			})
			.then((data) => {
				setUserData((prevState) => ({
					...prevState,
					userToken: data.data.token,
					userEmail: data.data.email,
					userId: data.data.idUsuario,
				}));
				navigate("/concluir-cadastro");
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function registrar() {
		axios
			.post(process.env.REACT_APP_API_URL + `/usuario/salvar`, {
				email: email,
				senha: senha,
			})
			.then(() => {
				login();
			})

			.catch((erro) => {
				console.log(erro);
			});
	}

	return (
		<div>
			<main>
				<div className="side-form">
					<div className="form-box">
						<h1>Registro</h1>
						<p>Fazer registro com:</p>
						<div className="login-socialbox">
							<button
								className="login-social"
								type="button"
								id="google"
							>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-google mb-1"
										viewBox="0 0 16 16"
									>
										<path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
									</svg>
								</span>{" "}
								<span>Google</span>{" "}
							</button>

							<button
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
										className="bi bi-facebook mb-1"
										viewBox="0 0 16 16"
									>
										<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
									</svg>
								</span>{" "}
								<span>Facebook</span>{" "}
							</button>
						</div>

						<h3 className="or">Ou</h3>

						<div>
							<div>
								<label className="lsOptionText" for="email">
									{" Email: "}
									<input
										type="email"
										className="input-padrao"
										onChange={(e) =>
											setEmail(e.target.value)
										}
										min={0}
										value={email}
										maxLength="50"
										placeholder="Ex: Pedro@gmail.com"
										id="email"
										name="email"
									/>
								</label>
							</div>
							<div>
								<label className="lsOptionText" for="senha">
									{" Senha: "}
									<input
										className="input-padrao"
										type="password"
										onChange={(e) =>
											setSenha(e.target.value)
										}
										min={0}
										value={senha}
										maxLength="22"
										placeholder="Ex: Hb794hll@#FF"
										id="senha"
										name="senha"
									/>
								</label>
							</div>
							<div>
								<label className="lsOptionText" for="senha">
									{" Confirmar senha: "}
									<input
										className="input-padrao"
										type="password"
										onChange={(e) =>
											setSenhaConfirmacao(e.target.value)
										}
										min={0}
										value={senhaConfirmacao}
										placeholder="Confirme sua senha"
										id="senha"
										name="senha"
										style={
											senha !== senhaConfirmacao
												? {
														borderColor: "red",
														backgroundColor:
															"rgba(200,100,100, 0.4)",
												  }
												: {}
										}
									/>
								</label>
							</div>
							<button className="form-button" onClick={registrar}>
								Registrar
							</button>
							<p className="registre">
								Já tem conta?{" "}
								<a
								className="link-primary"
									onClick={() => {
										navigate("/login");
									}}
								>
									Logar-se
								</a>
							</p>
						</div>
					</div>
				</div>

				<div className="other-side"></div>
			</main>
		</div>
	);
};

export default Register;
