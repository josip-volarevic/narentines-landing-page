import React from 'react'
import { BoxProps, Box, Typography } from '@mui/material'
import TextImportant from 'components/TextImportant'

type Position = {
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
		src: string
		position: {
			top: Position
			left: Position
		}
	}
}

const Article: React.FC<ArticleProps> = ({ title, text, icon, index, className, ...props }) => {
	return (
		<Box className={`article ${className || ''}`} {...props}>
			<TextImportant className='article-index'>{`${index}`.padStart(2, '0')}</TextImportant>
			<Typography variant='h4' component='h4'>
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
						transform: 'translate(-50%, -50%)',
					}}
				>
					<img src={icon.src} className='article-image' alt='' />
				</Box>
			) : null}
		</Box>
	)
}

export default Article
