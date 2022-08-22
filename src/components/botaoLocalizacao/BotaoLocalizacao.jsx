import { useState } from "react";

const BotaoLocalizacao = ({ funcao }) => {
	const [localizacao, setLocalizacao] = useState([]);

	function getLocation() {
		if (navigator.geolocation) {
			return navigator.geolocation.getCurrentPosition(returnPosition);
		} else {
			console.log("Navegador incompativel com a API de localização");
		}
	}

	function returnPosition(position) {
		setLocalizacao(position.coords);
		console.log(localizacao);
		funcao([localizacao.latitude, localizacao.longitude]);
	}

	return (
		<>
			<input
				type="checkbox"
				className="btn btn-primary"
				onClick={getLocation}
			/>
		</>
	);
};

export default BotaoLocalizacao;
