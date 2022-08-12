import Feature from "ol/Feature";
import TileLayer from "ol/layer/Tile";
import Map from "ol/Map";
import { useGeographic } from "ol/proj";
import XYZ from "ol/source/XYZ";
import { Icon, Style } from "ol/style";
import View from "ol/View";
import React, { useEffect } from "react";

import Point from "ol/geom/Point";
import { Vector as VectorLayer } from "ol/layer";
import VectorSource from "ol/source/Vector";
import "./mapa.css";

// Documentação: https://openlayers.org/en/latest/doc/
const Mapa = ({ coord }) => {
	useGeographic();
	useEffect(() => {
		const pino = new Feature({
			// geometry: new Point([-35.00331095765701, -8.506508432531763]),
			geometry: new Point(coord),
			name: "Local",
		});

		const pinoStyle = new Style({
			image: new Icon({
				src: "https://assets.stickpng.com/images/5888920ebc2fc2ef3a1860a9.png",
				// anchor: [-18.6,-59.4],
				anchor: [186, 594],
				anchorXUnits: "pixel",
				anchorYUnits: "pixel",
				scale: 0.09,
			}),
		});
		pino.setStyle(pinoStyle);

		const vectorSource = new VectorSource({
			features: [pino],
		});

		const vectorLayer = new VectorLayer({
			source: vectorSource,
		});
		new Map({
		target: "map",
			layers: [
				new TileLayer({
					source: new XYZ({
						url: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
					}),
				}),
				vectorLayer,
			],
			view: new View({
				center: coord,
				zoom: 15,
			}),
		});
	}, [coord]);

	return <div id="map" className="mapa"></div>;
};

export default Mapa;
