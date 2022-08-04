import { useContext } from "react";
import FlatUpContext from "../context/FlatUpContext";

const BotaoLocalizacao = () => {
	const contexto = useContext(FlatUpContext);

    function getLocation() {
        if (navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition(returnPosition);
        } else {
            console.log("Navegador incompativel com a API de localização");
        }
    }
    
    function showPosition(position) {
        console.log(`Latitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`)
    }
    
    function returnPosition(position) {
        contexto.setLocalizacao(position.coords)
        console.log(contexto.localizacao)
    }
    
    return (
        <>
            <button type="button" onClick={getLocation}>Use minha localização</button>
        </>
    )
}

export default BotaoLocalizacao;