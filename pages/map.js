import dynamic from "next/dynamic";
import BackButton from "../components/BackButton";
const MapWithNoSSR = dynamic(() => import("../components/Map"), {
	ssr: false,
});

export default function map() {
	return (
		<>
			<div id="mapPage" className="map">
				<MapWithNoSSR lat={35.30651} lng={-80.734277} />
			</div>
			<BackButton />
			<style jsx>
				{`
					.map {
						height: 95%;
						width: 99%;
						border: 1px solid #eaeaea;
						border-radius: 2px;
					}
				`}
			</style>
		</>
	);
}
