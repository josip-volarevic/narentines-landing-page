import React from 'react'
import { AppBarProps, AppBar, Grid, Typography, Button } from '@mui/material'
import Navigation from 'components/layout/Navigation'
import TextImportant from 'components/TextImportant'
import Logo from 'public/assets/logo.svg'
import pirateImage from 'public/assets/pirate.png'
import MintIcon from 'public/assets/vector-icons/mint-icon.svg'
import tbaOverlayImage from 'public/assets/tba-overlay.png'
import mapColorizedImage from 'public/assets/map-colorized.png'
import Image from 'next/Image'

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
					<Button variant='contained' href='#' className='button--mint' disabled>
						<MintIcon />
						Mint a Narentine
					</Button>
					<img src={tbaOverlayImage.src} className='image--tba-overlay' alt='' />
				</Grid>

				<Grid item xs={12} md={6} className='header-text-wrapper'>
					<Typography className='header-text'>
						The Narentines is a historically based project which features a collection of&nbsp;
						<TextImportant>8888</TextImportant> randomly generated&nbsp;
						<TextImportant>NFTs</TextImportant>&nbsp; living on the&nbsp;
						<TextImportant>Solana</TextImportant> blockchain.
						<br />
						Gamified experience will give you an insight on how these fierce pirates used to enjoy all the good they've
						come across.
					</Typography>
				</Grid>
			</Grid>
		</AppBar>
	)
}

export default Header
