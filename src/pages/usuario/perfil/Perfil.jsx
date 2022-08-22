import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlatUpContext from "../../../components/context/FlatUpContext";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import ButtonComponent from "../../../components/elements/ButtonComponent";
import "./perfil.css";
import PessoaPerfilExibir from "../../../components/pessoa/PessoaPerfilExibir";
import ImagemComponent from "../../../components/elements/ImagemComponent";

const Profile = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [userData, setUserData] = useContext(FlatUpContext);

	return (
		<div>
			<Navbar />
			<div className=" d-flex" style={{height:"100vh"}}>
				<div className=" d-flex justify-content-center w-25 flex-column align-items-center" style={{borderRight: "1px solid #b1b1b1"}}>
					<div className="imageSize">
						<ImagemComponent
							source={"https://firebasestorage.googleapis.com/v0/b/flatup-e23c8.appspot.com/o/ASSETS%2FMEDIA%2Fperfil.png?alt=media&token=8d3ac929-4cbc-4a40-a8ff-a55ec0312fe8"}
							alt={userData.nome}
							className="imagem-perfil"
							fluid={true}
						/>
					</div>

					<div className="d-flex flex-column w-100 my-4">

						<button className="botao-lado" 	onClick={() => navigate("/imoveis/cadastrar")}>Cadastrar Imóvel</button>

						<button className="botao-lado" 	onClick={() => navigate("/perfil/host/imoveis/")}>Meus imóveis</button>

						<button className="botao-lado" 	onClick={() => navigate("/perfil/locacoes/")}>Minhas locações</button>
					</div>

					<div className="">
						<ButtonComponent className="buttonPosicao"
							buttonName="Logout"
							func={() => {
								setUserData({});
								navigate("/");
							}}
							theme="danger"
						/>
					</div>
				</div>

				<div className="formDimensao container d-flex align-items-center justify-content-center">
					<PessoaPerfilExibir />
				</div>
			</div>



			<Footer />
		</div>
	);
};

export default Profile;
