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
						padding: 0;
						margin: 0;
						max-width: 100vw;
						min-height: 100vh;
						background-color: ${palette.accents_2};
					}
					.body {
						height: calc(100vh - 5rem);
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
