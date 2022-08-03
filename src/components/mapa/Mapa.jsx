import React, { useEffect, useRef } from "react";
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { useGeographic } from "ol/proj";
import './mapa.css'

// Documentação: https://openlayers.org/en/latest/doc/
const Mapa = ({ lat, long }) => {
	useGeographic();
	console.log(lat, long)
	new Map({
	  target: 'map',
	  layers: [
		new TileLayer({
		  source: new XYZ({
			url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
		  })
		})
	  ],
	  view: new View({
		center: [-34.9, -8.1],
		zoom: 11
	  })
	});
	return (
		<div id="map" className="mapa"></div>
	)
};

export default Mapa;
