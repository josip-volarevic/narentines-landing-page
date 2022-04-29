const path = require('path')
// const withPWA = require('next-pwa')

module.exports = {
	reactStrictMode: true,
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
	withPWA: {
		pwa: {
			dest: 'public',
		},
	},
}
