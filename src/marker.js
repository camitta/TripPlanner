import mapboxgl from 'mapbox-gl';
import markerDom from './index';

const markers = {
	activity: 'http://i.imgur.com/WbMOfMl.png',
	hotel: 'http://i.imgur.com/D9574Cu.png',
	restaurant: 'http://i.imgur.com/cqR6pUI.png'
};

function buildMarker(placeType, coordinates) {
	markerDom.style.backgroundImage = markers[placeType];
	return new mapboxgl.Marker(markerDom).setLngLat(coordinates);
}
