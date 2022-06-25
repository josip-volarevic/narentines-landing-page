import React from 'react'
import { Box, Button } from '@mui/material'
import MintIcon from 'public/assets/vector-icons/mint-icon.svg'
import OpenSeaIcon from 'public/assets/vector-icons/open-sea-icon.svg'
import MagicEdenIcon from 'public/assets/vector-icons/magic-eden-icon.svg'
import tbaOverlayImage from 'public/assets/tba-overlay.png'
import { useCountdown } from 'hooks'
import Image from 'next/image'

const expirationDate = 'Fri Jun 24 2022 20:00:00 GMT+0200 (Central European Summer Time)'

const MintButton: React.FC = () => {
	const { seconds, minutes, hours, days, isDue } = useCountdown({ expirationDate })

	// If expiratonDate is not yet determined, show the "YTD" image
	if (!expirationDate) {
		return (
			<>
				<Button variant='contained' href='#' className='header-button' disabled>
					<MintIcon />
					Mint a Narentine
				</Button>
				<Image
					src={tbaOverlayImage}
					className='header-button-overlay'
					layout='raw'
					width={460}
					height={120}
					priority
					alt=''
				/>
			</>
		)
	}

	// If expirationDate is not passed, show the countdown
	if (!isDue) {
		return (
			<Button variant='contained' href='#' className='header-button' disabled>
				<MintIcon />
				{days ? `${days}d ` : null}&nbsp;
				{`${hours}`.padStart(2, '0')}:{`${minutes}`.padStart(2, '0')}:{`${seconds}`.padStart(2, '0')}
			</Button>
		)
	}

	return (
		<Box className='header-button-wrapper'>
			<Button
				variant='contained'
				href='https://opensea.io/collection/narentines-solana'
				className='header-button'
				rel='noreferrer'
				target='_blank'
			>
				<OpenSeaIcon className='open-sea-icon' />
				OpenSea
			</Button>
			<Button
				variant='contained'
				href='https://www.magiceden.io/marketplace/narentinesnft'
				className='header-button'
				rel='noreferrer'
				target='_blank'
			>
				<MagicEdenIcon className='magic-eden-icon' />
				MagicEden
			</Button>
		</Box>
	)

	// return (
	// 	<Button
	// 		variant='contained'
	// 		href='https://narentines.creatormachine.com'
	// 		className='header-button'
	// 		rel='noreferrer'
	// 		target='_blank'
	// 	>
	// 		<MintIcon />
	// 		Mint a Narentine
	// 	</Button>
	// )
}

export default MintButton
