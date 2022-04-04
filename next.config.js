/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	images: {
		domains: ["upload.wikimedia.org", "drive.google.com", "i.picsum.photos"],
	},
};

module.exports = nextConfig;
