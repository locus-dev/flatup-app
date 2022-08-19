import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlatUpContext from "../../../components/context/FlatUpContext";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import InputComponent from "../../../components/elements/InputComponent";
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
							source={"./media/assets/perfil.png"}
							alt={userData.nome}
							className="imagem-perfil"
							fluid={true}
						/>
						{/* <div id="imagem-perfil">
						<img
							src="./media/assets/perfil.png"
							width="130"
							height="130"
						></img>
					</div> */}

					</div>

					<div className="d-flex flex-column w-100 my-4">
						
						<button className="botao-lado" style={{borderTop:"1px solid rgb(207, 207, 207)"}} onClick={() => navigate("/concluir-cadastro")}>Conclua seu cadastro</button>

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
