import { createTheme } from '@mui/material/styles'
// import dividerImage from 'public/assets/ui/divider.png'
import variables from 'styles/variables/theme.module.scss'

const defaultTheme = createTheme({
	palette: { primary: { main: variables.primaryColor }, secondary: { main: variables.secondaryColor } },
	typography: {
		fontSize: 18,
		fontFamily: 'Eczar',
		body1: { fontWeight: 500 },
		body2: { fontWeight: 500, fontFamily: 'Archivo Narrow' },
		h1: { fontWeight: 700, fontFamily: 'Archivo Narrow' },
		h2: { fontWeight: 700, fontFamily: 'Archivo Narrow' },
		h3: { fontWeight: 700, fontFamily: 'Archivo Narrow' },
		h4: { fontWeight: 700, fontFamily: 'Archivo Narrow' },
		h5: { fontWeight: 700, fontFamily: 'Archivo Narrow' },
		h6: { fontWeight: 600, fontFamily: 'Archivo Narrow' },
	},
	components: {
		MuiAppBar: { styleOverrides: { root: { boxShadow: 'none' } } },
		MuiAccordion: {
			styleOverrides: {
				root: {
					backgroundColor: 'unset',
					boxShadow: 'unset',
					'&::before': {
						backgroundColor: 'none',
						// backgroundImage: `url(${dividerImage.src})`,
						backgroundImage: 'url(/assets/ui/divider.png)',
						backgroundPositionX: '-4000px',
						top: '-2px',
						height: '3px',
					},
				},
			},
		},
		MuiAccordionSummary: { styleOverrides: { root: { padding: 0 } } },
		MuiAccordionDetails: { styleOverrides: { root: { padding: '8px 0' } } },
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					'&.Mui-disabled': {
						backgroundColor: variables.primaryColor,
						filter: 'brightness(0.85)',
						boxShadow: '4px 2px rgba(0,0,0,0.9) !important',
						color: variables.secondaryColor,
					},
				},
				contained: {
					borderRadius: '2rem',
					boxShadow: '4px 2px rgba(0,0,0,0.9)',
					border: '2px solid black',
					minWidth: '40px',
					padding: '2px 8px',
					textTransform: 'none',
					fontWeight: 'bold',
					'&:hover': {
						backgroundColor: variables.primaryColor,
						filter: 'brightness(0.85)',
						boxShadow: '6px 4px rgba(0,0,0,0.9)',
					},
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					borderRadius: '0.4rem',
				},
			},
		},
	},
})

export default defaultTheme
