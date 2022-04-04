import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export default function Map(props) {
	const lat = props.lat;
	const lng = props.lng;

    const center = [lat, lng];

    const profileFill = {
        fillColor: "#005035"
    };
    const covidFill = {
        fillColor: "#00ff00"
    };

	if (lat != undefined) {
		return (
			<MapContainer
				center={center}
				zoom={14}
				scrollWheelZoom={false}
				style={{ height: "100%", width: "100%" }}
			>
				<TileLayer
					url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaHVsbHJ5YW4iLCJhIjoiY2wxam8wbzE5MXRsNTNqcDg4a3VwZWRyYSJ9.8aHCBOM8hmAPIOgxAvmenA`}
					attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
				/>
				<Marker position={center} draggable={true} animate={true}>
					<Popup>Hey ! I live here</Popup>
				</Marker>
                <Circle center={center} radius={700} fill={profileFill} />
			</MapContainer>
		);
	} else {
		return (
			<>
				Location not passed as prop to map component
			</>
		);
	}
}
