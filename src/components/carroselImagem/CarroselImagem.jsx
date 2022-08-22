import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-carousel-minimal";
import { useLocation } from "react-router-dom";
import DATA from "../../DATAFILL";
import { initializeApp } from "firebase/app";

import { ref, getStorage, listAll, getDownloadURL } from "firebase/storage";
import { useState } from "react";

const CarroselImagem = ({ props }) => {
	const location = useLocation();
	const id = location.state.id;

	var images = [
		"https://firebasestorage.googleapis.com/v0/b/flatup-e23c8.appspot.com/o/imovel_id-15%2Fimagem-3.png?alt=media&token=100fbcab-1dd1-4dff-9da8-f57d83b9d407",
	];

	//  Listagem de objetos (imagens e pastas com imagens) no bucket do firebase storage
	const firebaseConfig = {
		apiKey: "AIzaSyAdfLPSnZEzmyvvQpJB_2z2yij8I9ZL0u8",
		authDomain: "flatup-e23c8.firebaseapp.com",
		projectId: "flatup-e23c8",
		storageBucket: "flatup-e23c8.appspot.com",
		messagingSenderId: "293462764439",
		appId: "1:293462764439:web:984942318223cbe2ac32d2",
	};

	const app = initializeApp(firebaseConfig);

	const storage = getStorage(app, "gs://flatup-e23c8.appspot.com");

	const listRef = ref(storage, `/imovel_id-${id}`);

	listAll(listRef)
		.then((res) => {
			res.items.forEach((itemRef) => {
				let imagemRef = ref(storage, itemRef._location.path_);
				getDownloadURL(imagemRef)
					.then((url) => {
						images.push(String(url));
            console.log(String(url));
            const img = document.getElementById('myimg');
            img.setAttribute('src', url);
        
					})
					.catch((error) => {
						// Handle any errors
					});
			});
		})
		.catch((error) => {
			console.log(error);
		});

    console.log(typeof images[3]);
	const captionStyle = {
		fontSize: "2em",
		fontWeight: "bold",
	};
	const slideNumberStyle = {
		fontSize: "20px",
		fontWeight: "bold",
	};
	return (
		<div className="App">
			<div style={{ textAlign: "center" }}>
				<div
					style={{
						margin: "20px auto",
					}}
				>
					<img id="myimg" src="" alt="Imagem" />
					<Carousel
						slideBackgroundColor={"none"}
						interval={8000}
						data={DATA.imoveis[id].imagens}
						time={8000}
						width="100vw"
						height="450px"
						captionStyle={captionStyle}
						radius="20px"
						slideNumber={false}
						slideNumberStyle={slideNumberStyle}
						captionPosition="bottom"
						automatic={true}
						dots={true}
						pauseIconColor="white"
						pauseIconSize="40px"
						slideImageFit="cover"
						thumbnails={true}
						thumbnailWidth="100px"
						style={{
							textAlign: "center",
							maxHeight: "500px",
							marginTop: "5px",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default CarroselImagem;
