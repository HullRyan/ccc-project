import { Page, useTheme } from "@geist-ui/core";
import Heading from "../components/Heading";

export default function Layout({ children }) {
	const { palette } = useTheme();

	return (
		<div className="page">
			<Heading />
			<div className="body">{children}</div>
			<style jsx>
				{`
					.page {
						position: relative;
						padding: 0;
						margin: 0;
						width: 100%;
						height: 100%;
						background-color: ${palette.accents_2};
						max-height: 812px;
						max-width: 375px;
						overflow: hidden;
					}
					.body {
						height: 100%;
						max-height: calc(812px - 5rem);
						border-radius: 3rem 3rem 0 0;
						background-color: ${palette.accents_1};
						padding: 3rem calc(1.34 * 16px) 0 calc(1.34 * 16px);
						margin: 0rem auto 0 auto;
						overflow: auto;
					}
				`}
			</style>
		</div>
	);
}
