// import { Loader } from "@googlemaps/js-api-loader";

// const Mapa = () => {
// 	const loader = new Loader({
// 		apiKey: "AIzaSyCr3Gd1I6oFrVfwKwNsBnE-Xk0Y-ar6H0U",
// 		version: "weekly",
// 		libraries: ["places"],
// 	});

// 	const mapOptions = {
// 		zoom: 14,
// 		center: { lat: -8.116167, lng: -35.029982 },
// 	};

// 	// Promise
// 	loader
// 		.load()
// 		.then((google) => {
	// 			new google.maps.Map(document.getElementById("map"), mapOptions);
	// 		})
// 		.catch((e) => {
// 			// do something
// 		});

// 	return (
// 		<>
// 			<div id="map"></div>
// 		</>
// 	);


const Mapa = () => {
// 	return (
// 		<>
// 			<script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
// 		<script
// 		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
// 		defer></script>
// {			window.initMap = () => {
// 				const mapOptions = {
// 					zoom: 14,
// 					center: { lat: -8.116167, lng: -35.029982 },
// 				};
			
// 				map = new google.maps.Map(document.getElementById("map"), mapOptions);
			
			
// 				var locations = [
// 					['IFPE', -8.11367, -35.03073],
// 					['Atacadão', -8.11142,-35.03222],
// 					['Condimínio Maurício de Nassau', -8.11375,-35.02742],
// 					['Linda Fitness', -8.11388,-35.02595],
// 					['Deggusta Burguer', -8.11539, -35.02306],
// 					['Escola Ideal', -8.11336,-35.02433],
// 					['Gruta', -8.11174,-35.03574]
// 				];
			
// 				for (i = 0; i < locations.length; i++) {
// 					marker = new google.maps.Marker({
// 					position: new google.maps.LatLng(locations[i][1], locations[i][2]),
// 					title: locations[i][0],
// 					map: map        
// 					});
// 					if (i==0) {
// 					marker = new google.maps.Marker({
// 					position: new google.maps.LatLng(locations[i][1], locations[i][2]),
// 					title: locations[i][0],
// 					map: map,
// 					icon: './pin1.png',
					
// 					});
// 					}
// 				}
			
// 				const infowindow = new google.maps.InfoWindow({
// 					content: "<p>Marker Location:" + marker.getPosition() + "</p>",
// 				});
			
// 				google.maps.event.addListener(marker, "click", () => {
// 					infowindow.open(map, marker);
// 				});
// 			}
// ;
// 		}
		
// 		<div id="map"></div>
		
// 	  </>
// 	  )
}


export default Mapa;
