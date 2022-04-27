import React from 'react'
import { BoxProps, Box, Typography } from '@mui/material'

export interface AvatarItem extends BoxProps {
	src: string
	title: string
	subtitle?: string
}

const Avatar: React.FC<AvatarItem> = ({ src, title, subtitle, ...props }) => {
	return (
		<Box className='avatar' {...props}>
			<img src={src} alt={title} />
			<Typography variant='h5' component='p'>
				{title}
			</Typography>
			{subtitle ? <Typography>{subtitle}</Typography> : null}
		</Box>
	)
}

export default Avatar
