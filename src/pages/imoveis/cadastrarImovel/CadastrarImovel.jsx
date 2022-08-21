import axios from "axios";
import { useContext, useState } from "react";
import CadastroEndereco from "../../../components/endereco/CadastroEndereco";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./CadastrarImovel.css";
import { useNavigate } from "react-router-dom";
import FlatUpContext from "../../../components/context/FlatUpContext";
import ImageUploading from "react-images-uploading";
import ButtonComponent from "../../../components/elements/ButtonComponent";
import CadastroContratoLocacao from "../../../components/cadastroContratoLocacao/CadastroContratoLocacao";

const CadastrarImovel = () => {
	const [userData, setUserData] = useContext(FlatUpContext);
	const [images, setImages] = useState([]);

	const [validadePromocao, setValidadePromocao] = useState("");
	const [valorDiaria, setValorDiaria] = useState("");

	const [localizacao, setLocalizacao] = useState({});

	console.log(userData.userEnderecoId);
	const [payload, setPayload] = useState({
		areaLazer: true,
		areaM2: 0,
		climatizado: "string",
		idEnderecoFK: userData.userEnderecoId,
		idImovel: null,
		piscina: true,
		quantQuarto: 0,
		quantSuite: 0,
		statusOcupacao: "DESOCUPADO",
		tituloAnuncio: "",
		descricao: "",
		municipio: userData.municipio,
	});

	const navigate = useNavigate();
	const maxNumber = 30;

	function postImovel() {
		console.log(userData.municipio);
		// TODO: ajustar passagem do id de endereco
		axios
			.post(
				process.env.REACT_APP_API_URL + "/imovel/salvar",
				{
					areaLazer: payload.areaLazer,
					areaM2: payload.areaM2,
					climatizado: payload.climatizado,
					idEnderecoFK: userData.userEnderecoId,
					piscina: payload.piscina,
					quantQuarto: payload.quantQuarto,
					quantSuite: payload.quantSuite,
					statusOcupacao: payload.statusOcupacao,
					tituloAnuncio: payload.tituloAnuncio,
					descricao: payload.descricao,
					validadePromocao: validadePromocao,
					valorDiaria: valorDiaria,
					municipio: userData.municipio,
				},
				{
					headers: {
						Authorization: `Bearer ${userData.userToken}`,
					},
				}
			)
			.then((resposta) => {
				setPayload((prevState) => ({
					...prevState,
					idImovel: resposta.data.idImovel,
				}));
				axios
				.post(
					`${process.env.REACT_APP_API_URL}/localizacao/salvar`,
					{
						// TODO: deixar id do imóvel dinâmico, pra isso vai ser necessario passa props pro componente pai
						imovel_id: resposta.data.idImovel,
						latitude: localizacao[0],
						longitude: localizacao[1],
						idLocalizacao: userData.userEnderecoId,
						idParceiroFK: userData.userId,
					},
					{
						headers: {
							Authorization: `Bearer ${userData.userToken}`,
						}
					}
				)
				.then((result) => {
					console.log(result);
				})
				.catch((error) => {
					console.log(error);
				});
				// images
				// 	.map((image) => {
				// 		axios.post(
				// 			process.env.REACT_APP_API_URL +
				// 				"/fotosimovel/salvar",
				// 			{
				// 				foto: new FileReader().readAsDataURL(image.getAsFile()),
				// 				foto_id: null,
				// 				imovel_id: resposta.data.idImovel,
				// 			},

				// 			{
				// 				headers: {
				// 					Authorization: `Bearer ${userData.userToken}`,
				// 				},
				// 			}
				// 		);
				// 	})
				// 	.then(() => {
				// 		navigate(`/imoveis/${payload.idImovel}`, {
				// 			state: {
				// 				token: userData.userToken,
				// 				id: 1,
				// 			},
				// 		});
				// 	});
				navigate(`/`, {
					state: {
						token: userData.userToken,
						id: 1,
					},
				});
			})
			.catch((error) => {
				// navigate("/imoveis");
				console.log(error);
			});
	}

	return (
		<main>
			<Navbar />
			<div className="container">
				<form className="form-carrossel">
					<div className="" id="slide-1">
						<h2>Endereço</h2>
						{/* TODO => Fazer os inputs dentro do componente "CadastroEndereco" passarem seus values para a const payload que será um objeto JSON */}
						<CadastroEndereco funcao={setLocalizacao} />
						<button
							id="seguir"
							className="button form-button"
							type="button"
							onClick={function () {
								document.getElementById(
									"slide-1"
								).style.display = "none";
								document.getElementById(
									"slide-2"
								).style.display = "flex";
							}}
						>
							Seguir
						</button>
					</div>

					<div className="container" id="slide-2">
						<h2>Informações adicionais</h2>
						<div className="d-flex flex-column w-100 mb-3">
							<label className="exampleInputEmail1">Título do Anúncio</label>
						
							<input
								className=""
								placeholder="Ex: ..."
								maxLength="100"
								type="text"
								name="tituloAnuncio"
								onChange={(e) => {
									payload.tituloAnuncio = String(
										e.target.value
									);
								}}
							/>
						</div>

						<div className=" d-flex flex-column mb-3 w-100">
							<label className="exampleInputEmail1">
								Descrição do Anúncio
							</label>
							<textarea
								name="descricao"
								id=""
								cols="30"
								rows="10"
								style={{ resize: "none" }}
								className="input rounded p-2"
								placeholder="Ex: ..."
								onChange={(e) => {
									payload.descricao = String(e.target.value);
								}}
							></textarea>
						</div>

						<div className="d-flex justify-content-between w-100">
							<div
								className=" d-flex flex-column mb-3"
								style={{ width: "33%" }}
							>
								<label className="exampleInputEmail1">
									Tamanho em m²
								</label>
								<input
									className="input"
									placeholder="Ex: 40"
									maxLength="4"
									type="text"
									name="areaM2"
									onChange={(e) => {
										payload.areaM2 = Number(e.target.value);
									}}
								/>
							</div>

							<div
								className=" d-flex flex-column mb-3"
								style={{ width: "30%" }}
							>
								<label className="exampleInputEmail1">
									Número de quartos
								</label>
								<input
									className=""
									placeholder="Ex: 3"
									maxLength="2"
									type="text"
									name="quantQuarto"
									onChange={(e) => {
										payload.quantQuarto = Number(
											e.target.value
										);
									}}
								/>
							</div>

							<div
								className=" d-flex flex-column mb-3"
								style={{ width: "33%" }}
							>
								<label className="exampleInputEmail1">
									Número de suites
								</label>
								<input
									className=""
									placeholder="Ex: 1"
									maxLength="2"
									type="text"
									name="quantSuite"
									onChange={(e) => {
										payload.quantSuite = Number(
											e.target.value
										);
									}}
								/>
							</div>
						</div>

						<h3 className="text-dark mt-3">comodidades</h3>
						<div className="py-3 w-100 mb-4 d-flex justify-content-between">
							<div
								className=" d-flex flex-column border 	  p-4 comodidade"
								style={{ width: "30%", height: "150px" }}
							>
								<h3 className="exampleInputEmail1">
									Climatizado
								</h3>
								<div className=" d-flex mb-2 align-items-center">
									<input
										className="input checkbox"
										type="radio"
										name="climatizado"
										id="climatizado"
										value="CLIMATIZADO"
										onChange={(e) => {
											payload.climatizado =
												e.target.value;
										}}
									/>
									<label
										htmlFor="climatizado"
										className="exampleInputEmail1"
									>
										Sim
									</label>
								</div>
								<div className=" d-flex mb-3 align-items-center">
									<input
										className="input checkbox"
										type="radio"
										id="nao_climatizado"
										name="climatizado"
										value="NAO_CLIMATIZADO"
										onChange={(e) => {
											payload.climatizado =
												e.target.value;
										}}
									/>
									<label
										htmlFor="nao_climatizado"
										className="exampleInputEmail1"
									>
										Não
									</label>
								</div>
							</div>

							<div
								className=" d-flex flex-column mb-3 border 	  p-4 comodidade"
								style={{ width: "30%", height: "150px" }}
							>
								<h3 className="exampleInputEmail1">
									Possui área de lazer?
								</h3>
								<div className=" d-flex mb-2 align-items-center">
									<input
										// className=""
										className="input checkbox"
										type="radio"
										name="areaLazer"
										id="arealazer"
										value={true}
										onChange={(e) => {
											payload.areaLazer =
												e.target.value === "true"
													? true
													: false;
										}}
									/>
									<label
										htmlFor="arealazer"
										className="exampleInputEmail1"
									>
										Sim
									</label>
								</div>
								<div className=" d-flex mb-2 align-items-center">
									<input
										// className=""
										className="input checkbox"
										type="radio"
										name="areaLazer"
										id="arealazer_nao"
										value={false}
										onChange={(e) => {
											payload.areaLazer =
												e.target.value === "false"
													? false
													: true;
										}}
									/>
									<label
										htmlFor="arealazer_nao"
										className="exampleInputEmail1"
									>
										Não
									</label>
								</div>
							</div>

							<div
								className=" d-flex flex-column mb-3 border 	  p-4 comodidade"
								style={{ width: "30%", height: "150px" }}
							>
								<h3 className="exampleInputEmail1">Piscina</h3>
								<div className=" d-flex mb-2 align-items-center">
									<input
										// className=""
										className="input checkbox"
										type="radio"
										name="piscina"
										id="piscina"
										value={true}
										onChange={(e) => {
											payload.piscina =
												e.target.value === "true"
													? true
													: false;
										}}
									/>
									<label
										htmlFor="piscina"
										className="exampleInputEmail1"
									>
										Sim
									</label>
								</div>
								<div className=" d-flex mb-2 align-items-center">
									<input
										// className=""
										className="input checkbox"
										type="radio"
										name="piscina"
										id="piscina_nao"
										value={false}
										onChange={(e) => {
											console.log(
												e.target.value === "false"
													? false
													: true
											);
											console.log(typeof e.target.value);
											console.log(e.target.value);
											payload.piscina =
												e.target.value === "false"
													? false
													: true;
										}}
									/>
									<label
										htmlFor="piscina_nao"
										className="exampleInputEmail1"
									>
										Não
									</label>
								</div>
							</div>
						</div>
						<div>
      <label>Valor da Diária</label>
      <input type="text" placeholder="Valor" 
	  onChange={(e)=> {
		setValorDiaria(Number(e.target.value))
	  }}/>
      
      <label>Quer aluguem antes do dia</label>
      <input type="date" placeholder="" onChange={(e)=> {
		setValidadePromocao(e.target.value)
	  }}/>
    </div>
						<div >
							
						<ImageUploading
						className="d-flex border w-100"
							multiple
							value={images}
							onChange={(imageList, addUpdateIndex) => {
								// data for submit
								console.log(imageList, addUpdateIndex);
								setImages(imageList);
							}}
							maxNumber={maxNumber}
							dataURLKey="data_url"
							acceptType={["jpg"]}
						>
							{({
								imageList,
								onImageUpload,
								onImageRemoveAll,
								onImageUpdate,
								onImageRemove,
								isDragging,
								dragProps,
							}) => (
								// write your building UI
								<div className="upload__image-wrapper">
									<ButtonComponent
										style={
											isDragging ? { color: "red" } : null
										}
										func={onImageUpload}
										{...dragProps}
										buttonName="Selecionar Imagens"
									/>
									{/* &nbsp;
									<ButtonComponent
										func={onImageRemoveAll}
										buttonName="Remover imagens"
									/> */}
									{imageList.map((image, index) => (
										<div key={index} className="image-item">
											<img
												src={image.data_url}
												alt=""
												width="500"
											/>
											<div className="image-item__btn-wrapper">
												{/* <ButtonComponent func={() => onImageUpdate(index)}
													buttonName="Atualizar imagens"
												/> */}
												<ButtonComponent
												theme="danger"
													func={() =>
														onImageRemove(index)
													}
													buttonName="X"
												/>
											</div>
										</div>
									))}
								</div>
							)}
						</ImageUploading>

						</div>

						<div className="form-footer">
							<button
								className="button form-button"
								type="button"
								onClick={function () {
									document.getElementById(
										"slide-2"
									).style.display = "none";
									document.getElementById(
										"slide-1"
									).style.display = "flex";
								}}
							>
								Voltar
							</button>
							<button
								type="button"
								className="button form-button"
								id="enviar"
								onClick={() => {
									postImovel();
								}}
							>
								Enviar
							</button>
						</div>
					</div>
				</form>
				<Footer />
			</div>
		</main>
	);
};

export default CadastrarImovel;
