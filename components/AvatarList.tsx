import React from 'react'
import { Grid, GridProps } from '@mui/material'
import Avatar, { AvatarItem } from 'components/Avatar'

interface Props extends GridProps {
	items: AvatarItem[]
}

const AvatarList: React.FC<Props> = ({ items, ...props }) => {
	return (
		<Grid container {...props}>
			{items.map((item) => (
				<Grid item xs={6} md={4} key={item.title} p={{ xs: 1, sm: 3, md: 4 }}>
					<Avatar {...item} />
				</Grid>
			))}
		</Grid>
	)
}

export default AvatarList
