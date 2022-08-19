import { useState, useContext } from "react";
import axios from "axios";
import Input from "../elements/InputComponent";
import Button from "../elements/ButtonComponent";
import FlatUpContext from "../context/FlatUpContext";

const PessoaRegistro = (props) => {
	const [userData, setUserData] = useContext(FlatUpContext);

	const [cpf, setCpf] = useState(null);
	const [cnpj, setCnpj] = useState(null);
	const [nome, setNome] = useState(null);
	const [dataNascimento, setDataNascimento] = useState(null);
	const [telefone, setTelefone] = useState(null);

	let data = {
		nome: nome,
		cnpj: cnpj,
		cpf: cpf,
		data_nascimento: dataNascimento,
		telefone: telefone,
		usuario_id: userData.userId,
	};

	const handlerSend = () => {
		axios
			.post(
				`${process.env.REACT_APP_API_URL}/pessoa/${props.verbo}`,
				data,
				{
					headers: {
						Authorization: `Bearer ${userData.userToken}`,
					},
				}
			)
			.then((result) => {
				console.log(result);
				setUserData((prevState) => ({
					...prevState,
					userPessoaId: data.data.pessoa_id,
				}));
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<form>
			<Input
				className="input"
				placeholder="nome"
				type="text"
				label="Nome"
				divClassName="form-control"
				change={(e) => setNome(e.target.value)}
			/>

			<Input
				className="input"
				placeholder="cpf"
				type="text"
				label="Cpf"
				divClassName="form-control"
				change={(e) => setCpf(e.target.value)}
			/>

			<Input
				className="input"
				placeholder="cnpj"
				type="text"
				label="cnpj"
				divClassName="form-control"
				change={(e) => setCnpj(e.target.value)}
			/>

			<Input
				className="input"
				placeholder="data de nascimento"
				type="text"
				label="Data de nascimento"
				divClassName="form-control"
				change={(e) => setDataNascimento(e.target.value)}
			/>

			<Input
				className="input"
				placeholder="telefone"
				type="text"
				label="Telefone"
				divClassName="form-control"
				change={(e) => setTelefone(e.target.value)}
			/>

			<Button
				id="salvar"
				className="form-button"
				buttonName="salvar"
				func={handlerSend}
			/>
		</form>
	);
};

export default PessoaRegistro;
