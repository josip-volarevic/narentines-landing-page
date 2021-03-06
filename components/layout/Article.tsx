import React from 'react'
import { BoxProps, Box, Typography } from '@mui/material'
import TextImportant from 'components/TextImportant'
import Image, { StaticImageData } from 'next/image'

type Breakpoints = {
	xs: string
	sm?: string
	md?: string
	lg?: string
	xl?: string
}

export interface ArticleProps extends BoxProps {
	index: number
	title: string
	text: string
	icon?: {
		src: string | StaticImageData
		position: {
			top: Breakpoints
			left: Breakpoints
		}
		transform?: string
	}
}

const Article: React.FC<ArticleProps> = ({ title, text, icon, index, className, ...props }) => {
	return (
		<Box className={`article ${className || ''}`} {...props}>
			<TextImportant className='article-index'>{`${index}`.padStart(2, '0')}</TextImportant>
			<Typography variant='h4' component='h3'>
				{title}
			</Typography>
			<Typography>{text}</Typography>
			{icon ? (
				<Box
					sx={{
						position: 'absolute',
						// zIndex: -1,
						top: icon.position.top,
						left: icon.position.left,
						transform: `translate(-50%, -50%) ${icon.transform}`,
					}}
				>
					<Image src={icon.src} layout='raw' width={180} height={180} className='article-image' alt='' />
				</Box>
			) : null}
		</Box>
	)
}

export default Article
