import Feature from "ol/Feature";
import TileLayer from "ol/layer/Tile";
import Map from "ol/Map";
import { useGeographic } from "ol/proj";
import XYZ from "ol/source/XYZ";
import View from "ol/View";
import React, { useEffect } from "react";
import { Icon, Style } from "ol/style";
import "./mapa.css";

// Documentação: https://openlayers.org/en/latest/doc/
const Mapa = ({coord}) => {
	useGeographic();
	useEffect(() => {

		// const pino = new Feature({
		// 	geometry: geoloc,
		// 	name: "Local",
		// });

		// const pinoStyle = new Style({
		// 	image: new Icon({
		// 		src: "./assets/img/pino.png",
		// 		anchor: [0.5, 1],
		// 		anchorXUnits: "fraction",
		// 		anchorYUnits: "fraction",
		// 		scale: 0.1,
		// 	}),
		// });
		// pino.setStyle(pinoStyle);
// console.log(coord)
		new Map({
			target: "map",
			layers: [
				new TileLayer({
					source: new XYZ({
						url: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
					}),
				}),
			],
			view: new View({
				center: coord,
				zoom: 15,
			}),
		});
	}, []);
	return <div id="map" className="mapa"></div>;
};

export default Mapa;
