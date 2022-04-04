import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import search from "../data/search.json";
import { useState } from "react";
import { Button, Modal, useToasts } from "@geist-ui/core";

export default function Map(props) {
	const lat = props?.lat;
	const lng = props?.lng;

	const center = [lat, lng];

    const { setToast } = useToasts();
	const [state, setState] = useState(false);
	const handler = () => setState(true);
	const closeHandler = (event) => {
		setState(false);
		console.log("closed");
	};

	const profileFill = {
		color: "blue",
	};
	const covidFill = {
		color: "red",
	};

	if (lat != undefined) {
		const providers = search.providers;

		return (
			<>
				<MapContainer
					center={center}
					zoom={14}
					scrollWheelZoom={false}
					style={{ height: "100%", width: "100%" }}
				>
					{console.log(providers)}
					<TileLayer
						url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaHVsbHJ5YW4iLCJhIjoiY2wxam8wbzE5MXRsNTNqcDg4a3VwZWRyYSJ9.8aHCBOM8hmAPIOgxAvmenA`}
						attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
					/>
					<Marker position={center} draggable={false} animate={true}>
						<Popup>Your location</Popup>
					</Marker>

					{providers.map((provider) => {
						const lat = provider.lat;
						const lng = provider.long;
						const position = [lat, lng];
						const radius = 300;
						const url =
							"https://www.google.com/maps/search/?api=1&query=" +
							provider.address1 +
							" " +
							provider.city +
							", " +
							provider.state +
							" " +
							provider.zip;
						return (
							<Marker position={position} key={provider.guid}>
								<Circle center={position} radius={radius} fill={covidFill} />
								<Popup>
									<div className="popup">
										<div>{provider.name}</div>
										<div
											className="popup-address"
											onClick={() =>
												window.open(url, "_blank", "noopener,noreferrer")
											}
										>
											<div>{provider.address1}</div>
											<div>
												{provider.city}, {provider.state} {provider.zip}
											</div>
										</div>
										<div>{provider.phone}</div>
										<Button
											type="primary"
											size="small"
											scale={0.75}
											onClick={handler}
										>
											Book Appointment
										</Button>
									</div>
								</Popup>
							</Marker>
						);
					})}
					<Circle center={center} radius={700} fill={profileFill} />
					<style jsx>
						{`
							.popup {
								display: flex;
								flex-direction: column;
								align-items: center;
								justify-content: space-between;
							}
							.popup-address {
								display: flex;
								flex-direction: column;
								align-items: center;
								justify-content: space-between;
								color: #0070f3;
								cursor: pointer;
							}
						`}
					</style>
				</MapContainer>
				<Modal visible={state} onClose={closeHandler}>
					<Modal.Title>Book Appointment</Modal.Title>
					<Modal.Content>
						<p>Nearest Appointment available on Monday, 4/17/22 at 4pm.</p>
					</Modal.Content>
					<Modal.Action passive onClick={() => setState(false)}>
						Cancel
					</Modal.Action>
					<Modal.Action onClick={() => {
                        setState(false);
                        setToast({ text: 'Appointment booked successfully.'});
                        }}>Book</Modal.Action>
				</Modal>
			</>
		);
	} else {
		return <>Location not passed as prop to map component</>;
	}
}
