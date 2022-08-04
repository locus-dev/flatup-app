import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlatUpContext from "../../../components/context/FlatUpContext";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./ConcluirCadastroPessoa.css";
import axios from "axios";

const ConcluirCadastroPessoa = () => {
	const [payload, setPayload] = useState({
		cnpj: "",
		cpf: "",
		data_nascimento: "",
		data_nascimento: "2022-07-19T16:13:19.378Z",
		nome: "",
		pessoa_id: Number,
		telefone: "",
		usuario_id: Number,
	});
	const navigate = useNavigate();
	const location = useLocation();

	const [userData, setUserData] = useContext(FlatUpContext);

	return (
		<div className="classe">
			<Navbar />
			<div id="form-cadastro-pessoa">
				<div className="form-control">
					<label>Nome</label>
					<input
						className="input"
						type="text"
						value={payload.nome.value}
						onChange={(e) => ({ ...payload, nome: e.target.value })}
						name="nome"
					/>
				</div>
				<div className="form-control">
					<label>Telefone</label>
					<input
						className="input"
						type="text"
						value={payload.telefone.value}
						onChange={(e) => ({
							...payload,
							telefone: e.target.value,
						})}
						name="telefone"
					/>
				</div>
				<div className="form-control">
					<label>CPF</label>
					<input
						className="input"
						type="text"
						value={payload.cpf.value}
						onChange={(e) => ({ ...payload, cpf: e.target.value })}
						name="cpf"
					/>
				</div>
				<div className="form-control">
					<label>CNPJ</label>
					<input
						className="input"
						type="text"
						value={payload.cnpj.value}
						onChange={(e) =>
							setPayload({ ...payload, cnpj: e.target.value })
						}
						name="cnpj"
					/>
				</div>
				<div className="form-control">
					<label>Data de Nascimento</label>
					<input
						className="input"
						value={payload.data_nascimento.value}
						onChange={(e) =>
							setPayload({
								...payload,
								data_nascimento: e.target.value,
							})
						}
						type="date"
						name="data_nascimento"
					/>
				</div>
				<button
					onClick={() => {
						axios
							.post(process.env.REACT_APP_API_URL + `/pessoa/salvar`, {
								headers: {
									Authorization: "Bearer " + userData.userToken,
								},
								data: payload,
							})
							.then(() => {
								navigate("/perfil")
							}).catch((error) => {
								console.log(error);
							});
					}}
				>
					Enviar
				</button>
			</div>
			<Footer />
		</div>
	);
};

export default ConcluirCadastroPessoa;
