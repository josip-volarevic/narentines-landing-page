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
// import { attributes as header } from 'content/header.md'

const Header: React.FC<AppBarProps> = (props) => {
	// console.log(header)
	return (
		<AppBar position='relative' color='transparent' className='header' {...props}>
			<div className='background'>
				<div className='background-overlay' />
				<Image
					src={mapColorizedImage}
					layout='fill'
					objectFit='cover'
					style={{ zIndex: -2 }}
					alt=''
					quality={50}
					priority
				/>
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
					<Image src={pirateImage} className='header-image' alt='' layout='raw' height={620} width={360} priority />
					<Button variant='contained' href='#mint' className='header-button' disabled rel='noreferrer' target='_blank'>
						<MintIcon />
						Mint a Narentine
					</Button>
					<Image
						src={tbaOverlayImage}
						className='header-button-overlay'
						alt=''
						layout='raw'
						width={460}
						height={120}
						priority
					/>
				</Grid>

				{/* {header.body ? (
					<Grid item xs={12} md={6} className='header-text-wrapper'>
						<Typography className='header-text'>{header.body}</Typography>
					</Grid>
				) : null} */}
				<Grid item xs={12} md={6} className='header-text-wrapper'>
					<Typography className='header-text'>
						The Narentines is a historically based project which features a collection of&nbsp;
						<TextImportant>8888</TextImportant> randomly generated&nbsp;
						<TextImportant>NFTs</TextImportant>&nbsp; living on the&nbsp;
						<TextImportant>Solana</TextImportant> blockchain.
						<br />
						Gamified experience will give you an insight on how these fierce pirates used to enjoy all the good
						they&apos;ve come across.
					</Typography>
				</Grid>
			</Grid>
		</AppBar>
	)
}

export default Header
