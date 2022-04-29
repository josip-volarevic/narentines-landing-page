import React from 'react'
import { Box, BoxProps, Grid, Button, Typography } from '@mui/material'
import { romanize } from 'utils'
import DiscordIcon from 'public/assets/vector-icons/discord-icon.svg'
import TwitterIcon from 'public/assets/vector-icons/twitter-icon.svg'
import MediumIcon from 'public/assets/vector-icons/medium-icon.svg'
import { attributes as footer } from 'content/footer.md'
import { attributes as company } from 'content/company.md'

const Footer: React.FC<BoxProps> = (props) => {
	return (
		<Box component='footer' className='footer' {...props}>
			<Grid
				container
				maxWidth='lg'
				direction={{
					xs: 'column',
					sm: 'row',
				}}
				px={4}
				margin='0 auto'
				className='footer-content'
			>
				<Grid item xs={12} sm={6}>
					{company.logo ? (
						// TODO: implement company logo image
						<img src='' alt={company.shortName} />
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

				<Grid item xs={12} sm={6}>
					<Typography variant='body2' className='footer-links-title'>
						{footer.linksTitle}
					</Typography>
					<Box className='footer-links'>
						<Button aria-label='twitter' href='https://twitter.com/NarentinesNFT'>
							<TwitterIcon />
						</Button>
						<Button aria-label='discord' href='https://discord.com/invite/narentines'>
							<DiscordIcon />
						</Button>
						<Button aria-label='medium' href='https://narentines.medium.com'>
							<MediumIcon />
						</Button>
						{/* {footer.links.map((link: any) => (
							<Button key={link.name} aria-label={link.text || link.name} href={link.href}>
								{link.icon}&nbsp;{link.text}
							</Button>
						))} */}
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Footer
