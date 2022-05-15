import React from 'react'
import { BoxProps, Box, Typography } from '@mui/material'
import Image from 'next/image'

export interface AvatarItem extends BoxProps {
	src: string
	title: string
	subtitle?: string
}

const Avatar: React.FC<AvatarItem> = ({ src, title, subtitle, ...props }) => {
	return (
		<Box className='avatar' {...props}>
			<Image src={src} alt={title} layout='responsive' width={512} height={512} lazyBoundary='400px' />
			<Typography variant='h5' component='p' className='avatar-title'>
				{title}
			</Typography>
			{subtitle ? <Typography className='avatar-subtitle'>{subtitle}</Typography> : null}
		</Box>
	)
}

export default Avatar
