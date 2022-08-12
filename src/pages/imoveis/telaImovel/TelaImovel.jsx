import { ref, getStorage, listAll, getBlob } from "firebase/storage";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import "./telaImovel.css";
import React from "react";
import CarroselImagem from "../../../components/carroselImagem/CarroselImagem";
import ImovelDetalhe from "../imovelDetalhes/imovelDetalhes";
import { Button } from "reactstrap";
import DATA from "../../../DATAFILL";
import app from '../../../config'

const TelaImovel = () => {
	const location = useLocation();

	function curtir() {
		document.getElementById("curtirVazio").classList.add("desaparece");
		document.getElementById("curtirCheio").classList.remove("desaparece");
	}

	function descurtir() {
		document.getElementById("curtirVazio").classList.remove("desaparece");
		document.getElementById("curtirCheio").classList.add("desaparece");
	}


	
	const storage = getStorage(app, "gs://flatup-e23c8.appspot.com");

	// Create a reference under which you want to list
	const listRef = ref(storage, '/imovel-exemplo-'+location.state.id);
	
	// Find all the prefixes and items.
	listAll(listRef)
	  .then((res) => {
		res.prefixes.forEach((folderRef) => {
			// console.log(folderRef);
		  // All the prefixes under listRef.
		  // You may call listAll() recursively on them.
		});
		res.items.forEach((itemRef) => {
			// console.log("https://firebasestorage.googleapis.com/v0/b/flatup-e23c8.appspot.com/o/"+itemRef._location.path_+"?alt=media");
			// console.log(itemRef)
			getBlob(storage).then((blob) => {
				console.log(blob)
				console.log(blob.name)
				// console.log(blob.size)
				// console.log(blob.type)
				// console.log(blob.updated)


			}).catch((error) => {	
				console.log(error)
			})
			// All the items under listRef.
		});
	  }).catch((error) => {
		// Uh-oh, an error occurred!
	  });





	return (
		<div>
			<Navbar />
			<main>
				<div id="carrosel">
					<h2 id="tituloImovel">{DATA.imoveis[location.state.id-1].titulo_anuncio}</h2>
					<div id="avaliacaoContainer">
						<a href="/imoveis" id="avaliacao">
							<span id="estrelinha">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									class="bi bi-star-fill"
									viewBox="0 0 16 16"
								>
									<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									class="bi bi-star-fill"
									viewBox="0 0 16 16"
								>
									<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									class="bi bi-star-fill"
									viewBox="0 0 16 16"
								>
									<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									class="bi bi-star-fill"
									viewBox="0 0 16 16"
								>
									<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									class="bi bi-star-fill"
									viewBox="0 0 16 16"
								>
									<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
								</svg>
							</span>{" "}
							<span id="avaliacaoTexto">avaliação (5)</span>{" "}
						</a>

						<a href="/imoveis" id="curti">
							<span id="curtirVazio" onClick={curtir}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									fill="rgb(60, 60, 60)"
									class="bi bi-heart"
									viewBox="0 0 16 16"
								>
									<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
								</svg>
							</span>

							<span
								id="curtirCheio"
								className="desaparece"
								onClick={descurtir}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									fill="rgb(255, 55, 55)"
									class="bi bi-heart-fill"
									viewBox="0 0 16 16"
								>
									<path
										fill-rule="evenodd"
										d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
									/>
								</svg>
							</span>
						</a>
					</div>
					{console.log(`Id vindo por parâmetro: ${location.state.id}`)}
					{console.log("Dados simulados:")}
					{console.log(DATA.imoveis[location.state.id-1])}
					<CarroselImagem props={location.state.id-1}/>
					<ImovelDetalhe props={location.state.id-1}/>
				</div>
			</main>
		</div>
	);
};

export default TelaImovel;