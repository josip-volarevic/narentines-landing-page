import type { NextPage } from 'next'
import { Box } from '@mui/material'
import CollectionShowcase from 'components/CollectionShowcase'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import Main from 'components/layout/Main'
import Section from 'components/layout/Section'
import AccordionList from 'components/AccordionList'
import ArticleList from 'components/ArticleList'
import AvatarList from 'components/AvatarList'
import { articleItems } from 'data'
import { attributes as team } from 'content/team.md'
import { attributes as faq } from 'content/faq.md'
import { attributes as collection } from 'content/collection.md'
// import { attributes as articles } from 'content/articles.md'

const Home: NextPage = () => {
	return (
		<>
			<Header />

			<Main>
				{articleItems ? (
					<Section id='articles'>
						<ArticleList items={articleItems} />
					</Section>
				) : null}

				{collection ? (
					<Section id='showcase'>
						<CollectionShowcase collection={collection} />
					</Section>
				) : null}

				{faq ? (
					<Section id='faq' title={faq.title}>
						<Box display='flex'>
							<AccordionList items={faq.items} mr={{ md: 4 }} />
							<img src={faq.image} alt='' className='faq-image' />
						</Box>
					</Section>
				) : null}

				{team ? (
					<Section id='team' title={team.title}>
						<AvatarList items={team.members} />
					</Section>
				) : null}
			</Main>

			<Footer />
		</>
	)
}

export default Home
