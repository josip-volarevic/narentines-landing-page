import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import Head from 'next/head'
import theme from 'styles/theme'
import 'styles/app.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
