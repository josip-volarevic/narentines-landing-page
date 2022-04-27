import React from 'react'
import { Box, BoxProps, Grid, Button, Typography } from '@mui/material'
import DiscordIcon from 'public/assets/vector-icons/discord-icon.svg'
import TwitterIcon from 'public/assets/vector-icons/twitter-icon.svg'
import MediumIcon from 'public/assets/vector-icons/medium-icon.svg'
import { romanize } from 'utils'

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
					<Typography variant='body2' className='company-name'>
						Swamplabs
					</Typography>
					<Typography variant='body2'>&copy; Swamp Labs d.o.o. / {romanize(new Date().getFullYear())}</Typography>
				</Grid>

				<Grid item xs={12} sm={6}>
					<Typography variant='body2' className='footer-links-title'>
						Join us on social media
					</Typography>
					<Box className='footer-links'>
						<Button aria-label='twitter' href='#twitter'>
							<TwitterIcon />
						</Button>
						<Button aria-label='discord' href='#discord'>
							<DiscordIcon />
						</Button>
						<Button aria-label='medium' href='#medium'>
							<MediumIcon />
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Footer
