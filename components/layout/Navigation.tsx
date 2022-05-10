import React from 'react'
import { ToolbarProps, Toolbar, Button, Hidden, Box, Menu, MenuItem, Typography } from '@mui/material'
import DiscordIcon from 'public/assets/vector-icons/discord-icon.svg'
import TwitterIcon from 'public/assets/vector-icons/twitter-icon.svg'
import MediumIcon from 'public/assets/vector-icons/medium-icon.svg'
import { attributes as navigation } from 'content/navigation.md'
import { useAnchorElement } from 'hooks'

const Navigation: React.FC<ToolbarProps> = (props) => {
	const [menuAnchorEl, setMenuAnchorEl, resetMenuAnchorEl] = useAnchorElement()

	return (
		<Toolbar component='nav' className='navigation' {...props}>
			<Box className='navigation-items navigation-items--left'>
				<Button variant='contained' href='#whitepaper' rel='noreferrer' target='_blank'>
					White Paper
				</Button>
				<Button variant='contained' href='#litepaper' rel='noreferrer' target='_blank'>
					Lite
				</Button>
			</Box>

			<Box className='navigation-items navigation-items--right'>
				{/* Mobile */}
				<Hidden smUp>
					{/* <IconButton
						aria-label='Navigation menu'
						aria-controls='nav-menu'
						aria-haspopup='true'
						onClick={handleOpenNavMenu}
						color='inherit'
					>
						<MenuIcon />
					</IconButton> */}
					<Button variant='contained' onClick={setMenuAnchorEl}>
						Social
					</Button>
					<Menu
						anchorEl={menuAnchorEl}
						open={Boolean(menuAnchorEl)}
						onClose={resetMenuAnchorEl}
						className='navigation-items navigation-items--right'
						PaperProps={{ className: 'mobile-menu' }}
						keepMounted
					>
						<MenuItem onClick={resetMenuAnchorEl}>
							<Button color='secondary' href='https://twitter.com/NarentinesNFT'>
								<TwitterIcon />
								Twitter
							</Button>
						</MenuItem>
						<MenuItem onClick={resetMenuAnchorEl}>
							<Button color='secondary' href='https://discord.com/invite/narentines'>
								<DiscordIcon />
								Discord
							</Button>
						</MenuItem>
						<MenuItem onClick={resetMenuAnchorEl}>
							<Button color='secondary' href='https://narentines.medium.com'>
								<MediumIcon />
								Medium
							</Button>
						</MenuItem>
					</Menu>
				</Hidden>

				{/* Desktop */}
				<Hidden smDown>
					<Button variant='contained' aria-label='twitter' href='https://twitter.com/NarentinesNFT'>
						<TwitterIcon />
					</Button>
					<Button variant='contained' aria-label='discord' href='https://discord.com/invite/narentines'>
						<DiscordIcon />
					</Button>
					<Button variant='contained' aria-label='medium' href='https://narentines.medium.com'>
						<MediumIcon />
					</Button>
				</Hidden>
			</Box>
		</Toolbar>
	)
}

export default Navigation
