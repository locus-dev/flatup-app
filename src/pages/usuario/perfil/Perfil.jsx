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
		<div className="classe">
			<Navbar />
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

				<div className="formDimensao">
					<PessoaPerfilExibir/>
				</div>

				<div className="botoes-perfil">
					<ButtonComponent className="buttonPosicao"
						buttonName="Conclua seu cadastro"
						func={() => navigate("/concluir-cadastro")}
						theme="secondary"
					/>

					<ButtonComponent className="buttonPosicao"
						buttonName="Cadastrar Imóvel"
						func={() => navigate("/imoveis/cadastrar")}
						theme="success"
					/>

					<ButtonComponent className="buttonPosicao"
						buttonName="Meus imóveis"
						func={() => navigate("/perfil/host/imoveis/")}
						theme="success"
					/>

					<ButtonComponent className="buttonPosicao"
						buttonName="Minhas locações"
						func={() => navigate("/perfil/locacoes/")}
						theme="success"
					/>

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
	);
};

export default Profile;
