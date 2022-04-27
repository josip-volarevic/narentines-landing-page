import React from 'react'
import { Grid, GridProps } from '@mui/material'
import Article, { ArticleProps } from 'components/layout/Article'

interface ArticleGridItem {
	gridProps: GridProps & { xs: number; md: number }
	articleProps: ArticleProps
}

interface Props extends GridProps {
	items: ArticleGridItem[]
}

const ArticleList: React.FC<Props> = ({ items, ...props }) => {
	return (
		<Grid container {...props}>
			{items.map((article) => (
				<Grid item key={article.articleProps.index} {...article.gridProps}>
					<Article {...article.articleProps} />
				</Grid>
			))}
		</Grid>
	)
}

export default ArticleList
