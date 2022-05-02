import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from 'styles/theme'
import Head from 'next/head'
import TagManager from 'react-gtm-module'
import 'styles/app.scss'

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// initialize gtag analytics
		TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER || '' })

		if ('serviceWorker' in navigator) {
			window.addEventListener('load', function () {
				navigator.serviceWorker.register('/sw.js').then(
					function (registration) {
						console.log('Service Worker registration successful with scope: ', registration.scope)
					},
					function (err) {
						console.log('Service Worker registration failed: ', err)
					}
				)
			})
		}
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
				/>
				<title>Narentines</title>
			</Head>

			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
