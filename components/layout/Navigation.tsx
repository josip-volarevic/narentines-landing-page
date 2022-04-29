import React from 'react'
import { ToolbarProps, Toolbar, Button, Hidden, Box } from '@mui/material'
import DiscordIcon from 'public/assets/vector-icons/discord-icon.svg'
import TwitterIcon from 'public/assets/vector-icons/twitter-icon.svg'
import MediumIcon from 'public/assets/vector-icons/medium-icon.svg'
import { attributes as navigation } from 'content/navigation.md'

const Navigation: React.FC<ToolbarProps> = (props) => {
	console.log(navigation)

	return (
		<Toolbar component='nav' className='navigation' {...props}>
			<Button variant='contained' href='#whitepaper' rel='noreferrer' target='_blank'>
				White Paper
			</Button>

			<Hidden smDown>
				<Box className='navigation-links'>
					<Button variant='contained' aria-label='twitter' href='https://twitter.com/NarentinesNFT'>
						<TwitterIcon />
					</Button>
					<Button variant='contained' aria-label='discord' href='https://discord.com/invite/narentines'>
						<DiscordIcon />
					</Button>
					<Button variant='contained' aria-label='medium' href='https://narentines.medium.com'>
						<MediumIcon />
					</Button>
				</Box>
			</Hidden>
		</Toolbar>
	)
}

export default Navigation
