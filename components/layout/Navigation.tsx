import React from 'react'
import { ToolbarProps, Toolbar, Button, Hidden, Box } from '@mui/material'
import DiscordIcon from 'public/assets/vector-icons/discord-icon.svg'
import TwitterIcon from 'public/assets/vector-icons/twitter-icon.svg'
import MediumIcon from 'public/assets/vector-icons/medium-icon.svg'

const Navigation: React.FC<ToolbarProps> = (props) => {
	return (
		<Toolbar component='nav' className='navigation' {...props}>
			<Button variant='contained' href='#whitepaper' rel='noreferrer' target='_blank'>
				White Paper
			</Button>

			<Hidden smDown>
				<Box className='navigation-links'>
					<Button variant='contained' aria-label='twitter' href='#twitter'>
						<TwitterIcon />
					</Button>
					<Button variant='contained' aria-label='discord' href='#discord'>
						<DiscordIcon />
					</Button>
					<Button variant='contained' aria-label='medium' href='#medium'>
						<MediumIcon />
					</Button>
				</Box>
			</Hidden>
		</Toolbar>
	)
}

export default Navigation
