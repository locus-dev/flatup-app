import Feature from "ol/Feature";
import TileLayer from "ol/layer/Tile";
import Map from "ol/Map";
import { useGeographic } from "ol/proj";
import XYZ from "ol/source/XYZ";
import { Icon, Style } from "ol/style";
import View from "ol/View";
import React, { useEffect } from "react";
import { Modify } from "ol/interaction";
import Point from "ol/geom/Point";
import { Vector as VectorLayer } from "ol/layer";
import VectorSource from "ol/source/Vector";
import Overlay from "ol/Overlay";
import "./mapa.css";
import DATA from "../../DATAFILL";
import { useState } from "react";
import {transform} from "ol/proj";

import Geolocation from "ol/Geolocation";

// Documentação: https://openlayers.org/en/latest/doc/
// Se o modo de exibição for true, serão exibidos pinos de outros imóveis e não será possível mover o ponteiro, nem pegar a geolocalização.
const Mapa = ({ coord, modoExibicao, usarGps, funcao }) => {
	// Define o padrão de projeção para o mapa como Geográfico
	useGeographic();

	// Coordenadas do ponteiro caso ele seja movido
	const [coordPino, setCoordPino] = useState(null);

	// Atualiza o mapa a cada alteração, garantindo que a exibição não quebre
	// Não mexa!
	useEffect(() => {
		if (coordPino) {
			return undefined;
		}
		// Cria o pino padrão ////////////////////////////////////////////////////////
		const pino = new Feature({
			geometry: new Point(coord),
			name: "Local",
		});

		const pinoStyle = new Style({
			image: new Icon({
				src: "../media/assets/pino.png",
				anchor: [186, 594],
				anchorXUnits: "pixel",
				anchorYUnits: "pixel",
				scale: 0.09,
			}),
		});
		pino.setStyle(pinoStyle);
		//////////////////////////////////////////////////////////////////////////////

		// Cria uma camada para vetores (onde os pinos deveram ficar)
		const vectorSource = new VectorSource({
			features: [pino],
		});

		const vectorLayer = new VectorLayer({
			source: vectorSource,
		});

		// Configura e cria o mapa /////////////////////////////////////////////////
		const view = new View({
			center: coord,
			zoom: modoExibicao ? 15 : 10,
		});

		const target = document.getElementById("map");
		
		const map = new Map({
			target: target,
			layers: [
				new TileLayer({
					source: new XYZ({
						url: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
					}),
				}),
				vectorLayer,
			],
			view: view,
		});
		///////////////////////////////////////////////////////////////////////////

		if (modoExibicao) {
			// De acordo como modo de utilização do mapa, exibe pinos de outros imóveis ou não

			DATA.imoveis.map((imovel) => {
				if (imovel.geolocalizacao != coord) {
					const feature = new Feature({
						geometry: new Point(imovel.geolocalizacao),
					});
					feature.setStyle(
						new Style({
							image: new Icon({
								src: "../media/assets/outro-pino.png",
								anchor: [186, 594],
								anchorXUnits: "pixel",
								anchorYUnits: "pixel",
								scale: 0.065,
							}),
						})
					);
					vectorSource.addFeature(feature);
				}
			});
		} else {
			const modify = new Modify({
				hitDetection: vectorLayer,
				source: vectorSource,
			});
			modify.on(["modifystart", "modifyend"], function (evt) {
				target.style.cursor =
					evt.type === "modifystart" ? "grabbing" : "pointer";
				setCoordPino(pino.getGeometry().getCoordinates());
			});
			const overlaySource = modify.getOverlay().getSource();
			overlaySource.on(["addfeature", "removefeature"], function (evt) {
				target.style.cursor =
				evt.type === "addfeature" ? "pointer" : "";
				setCoordPino(pino.getGeometry().getCoordinates());
			});
			
			map.addInteraction(modify);
			console.log(coordPino);

			map.on('click', function(evt){
				coord = transform(evt.coordinate, evt.map.getView().getProjection(), 'EPSG:4326');
				setCoordPino(coord);
				console.log(`new coord: ${coord}`);
				funcao(coord)
			});

			// // Pega localização atual do usuário e move o ponteiro para ele
			// const geolocation = new Geolocation({
			// 	trackingOptions: {
			// 		enableHighAccuracy: true,
			// 	},
			// 	projection: view.getProjection(),
			// });
			// geolocation.setTracking(usarGps);
			// geolocation.on("change:position", function () {
			// 	funcao(geolocation.position_);
			// 	console.log(`the geolocation: ${geolocation.position_}`);
			// });
			/////////////////////////////////////////////////////////////////
		}
	}, [coord]);

	return (
		<>
			<div id="map" className="mapa"></div>
		</>
	);
};

export default Mapa;
