import React from 'react'
import { Button } from '@mui/material'
import MintIcon from 'public/assets/vector-icons/mint-icon.svg'
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
		<Button variant='contained' href='#mint' className='header-button' rel='noreferrer' target='_blank'>
			<MintIcon />
			Mint a Narentine
		</Button>
	)
}

export default MintButton
