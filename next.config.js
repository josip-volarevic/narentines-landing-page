const path = require('path')
const withPWA = require('next-pwa')

module.exports = withPWA({
	reactStrictMode: true,
	experimental: {
		images: {
			allowFutureImage: true,
		},
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})

		config.module.rules.push({
			test: /\.md$/,
			loader: 'frontmatter-markdown-loader',
			options: { mode: ['react-component'] },
		})

		return config
	},
	pwa: {
		dest: 'public',
		disable: process.env.NODE_ENV === 'development',
		mode: 'production',
	},
})
