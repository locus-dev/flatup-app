function getLocation() {
	if (navigator.geolocation) {
		return navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		console.log("Navegador incompativel com a API de localização");
	}
}

function showPosition(position) {
    console.log(`Latitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`)
}

function returnPosition(position) {
    return position
}

export { getLocation, showPosition, returnPosition };
