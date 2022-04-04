import Script from "next/script";

export default function County() {
	return (
		<div>
			<Script src="https://tools.cdc.gov/1M1B"></Script>
			<div className="county-iframe" data-cdc-widget="COVIDCountyCheck" data-horizontal="true"></div>
			<style jsx global>
				{`
					.county-iframe {
						height: 100%;
						width: 100%;
                        overflow: auto;
                        background-color: #fafafa;
					}
				`}
			</style>
		</div>
	);
}
