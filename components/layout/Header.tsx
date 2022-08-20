import React from 'react'
import { AppBarProps, AppBar, Grid, Typography } from '@mui/material'
import Navigation from 'components/layout/Navigation'
import TextImportant from 'components/TextImportant'
import Logo from 'public/assets/logo.svg'
import pirateImage from 'public/assets/pirate.png'
// import mapColorizedImage from 'public/assets/map-colorized.png'
import mapColorizedImage from 'public/assets/map-colorized.webp'
import Image from 'next/future/image'
// import Image from 'next/image'
import MintButton from 'components/MintButton'
// import { attributes as header } from 'content/header.md'

const Header: React.FC<AppBarProps> = (props) => {
	// console.log(header)

	return (
		<AppBar position='relative' color='transparent' className='header' {...props}>
			<div className='background-wrapper'>
				<div className='background-overlay' />
				<Image
					sizes='100vw'
					src={mapColorizedImage}
					className='background-image'
					placeholder='blur'
					quality={50}
					priority
					alt=''
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
					<Image src={pirateImage} className='header-image' alt='' height={620} width={360} priority />
					<MintButton />
				</Grid>

				{/* {header.body ? (
					<Grid item xs={12} md={6} className='header-text-wrapper'>
						<Typography className='header-text'>{header.body}</Typography>
					</Grid>
				) : null} */}
				<Grid item xs={12} md={6} className='header-text-wrapper'>
					<Typography className='header-text'>
						”The Narentines“ are history inspired project which features a vast collection of&nbsp;
						<TextImportant>3333</TextImportant> randomly generated&nbsp;
						<TextImportant>NFTs</TextImportant>&nbsp;that lodge on the&nbsp;
						<TextImportant>Solana</TextImportant> blockchain.
						<br />
						Captivating lore will give you insight into how these fierce pirates used to enjoy all the goods
						they&apos;ve come across, and raid their way into becoming infamous legends.
					</Typography>
				</Grid>
			</Grid>
		</AppBar>
	)
}

export default Header
