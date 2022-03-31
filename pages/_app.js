import { GeistProvider, CssBaseline } from "@geist-ui/core";
import "../styles/globals.css";
import Layout from "./../components/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<GeistProvider>
			<CssBaseline />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</GeistProvider>
	);
}

export default MyApp;
