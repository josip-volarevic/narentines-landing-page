import React from 'react'
import { Box, BoxProps, Grid, Button, Typography } from '@mui/material'
import { romanize } from 'utils'
import DiscordIcon from 'public/assets/vector-icons/discord-icon.svg'
import TwitterIcon from 'public/assets/vector-icons/twitter-icon.svg'
import MediumIcon from 'public/assets/vector-icons/medium-icon.svg'
import carbonFreeImage from 'public/assets/carbon-free.png'
import { attributes as footer } from 'content/footer.md'
import { attributes as company } from 'content/company.md'
import Image from 'next/future/image'

const Footer: React.FC<BoxProps> = (props) => {
	return (
		<Box component='footer' className='footer' {...props}>
			<Grid container maxWidth='lg' margin='0 auto' className='footer-content'>
				<Grid item xs={12} md={4}>
					{company.logo ? (
						// TODO: implement company logo image
						<Image src='' alt={company.shortName} />
					) : (
						<Typography variant='body2' className='company-name'>
							{company.shortName}
						</Typography>
					)}
					{company.name ? (
						<Typography variant='body2'>
							&copy; {company.name} / {romanize(new Date().getFullYear())}
						</Typography>
					) : null}
				</Grid>

				<Grid item xs={12} md={4}>
					<Typography variant='body2' className='footer-links-title'>
						{footer.linksTitle}
					</Typography>
					<Box className='footer-links'>
						<Button aria-label='twitter' href='https://twitter.com/Narentines'>
							<TwitterIcon />
						</Button>
						<Button aria-label='discord' href='https://discord.com/invite/narentines'>
							<DiscordIcon />
						</Button>
						<Button aria-label='medium' href='https://medium.com/@NarentinesNFT'>
							<MediumIcon />
						</Button>
						{/* {footer.links.map((link: any) => (
							<Button key={link.name} aria-label={link.text || link.name} href={link.href}>
								{link.icon}&nbsp;{link.text}
							</Button>
						))} */}
					</Box>
				</Grid>

				<Grid item xs={12} md={4}>
					<Image className='footer-image' src={carbonFreeImage} alt='carbon-free' width={280} height={72} />
				</Grid>
			</Grid>
		</Box>
	)
}

export default Footer
