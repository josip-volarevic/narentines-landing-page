import React from 'react'
import { AppBarProps, AppBar, Grid, Typography, Button } from '@mui/material'
import Navigation from 'components/layout/Navigation'
import TextImportant from 'components/TextImportant'
import Logo from 'public/assets/logo.svg'
import pirateImage from 'public/assets/pirate.png'
import MintIcon from 'public/assets/vector-icons/mint-icon.svg'
import tbaOverlayImage from 'public/assets/tba-overlay.png'
import mapColorizedImage from 'public/assets/map-colorized.png'
import Image from 'next/image'
import { attributes as header } from 'content/header.md'

const Header: React.FC<AppBarProps> = (props) => {
	return (
		<AppBar position='relative' color='transparent' className='header' {...props}>
			<div className='background'>
				<div className='background-overlay' />
				<Image src={mapColorizedImage} layout='fill' objectFit='cover' style={{ zIndex: -2 }} alt='' />
			</div>

			<Navigation />
			<Logo className='logo' />

			<Grid
				container
				px={4}
				maxWidth='lg'
				className='header-content'
				direction={{
					xs: 'column-reverse',
					md: 'row',
				}}
			>
				<Grid item xs={12} md={6} className='header-image-wrapper'>
					<img src={pirateImage.src} className='header-image' alt='' />
					<Button variant='contained' href='#' className='header-button' disabled>
						<MintIcon />
						Mint a Narentine
					</Button>
					<img src={tbaOverlayImage.src} className='header-button-overlay' alt='' />
				</Grid>

				{header.body ? (
					<Grid item xs={12} md={6} className='header-text-wrapper'>
						<Typography className='header-text'>{header.body}</Typography>
					</Grid>
				) : null}
			</Grid>
		</AppBar>
	)
}

export default Header
