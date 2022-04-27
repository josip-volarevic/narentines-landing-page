import type { NextPage } from 'next'
import { Box, Hidden } from '@mui/material'
import CollectionShowcase from 'components/CollectionShowcase'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import Main from 'components/layout/Main'
import Section from 'components/layout/Section'
import AccordionList from 'components/AccordionList'
import ArticleList from 'components/ArticleList'
import AvatarList from 'components/AvatarList'
import { exampleCollection, articleItems, teamMembers, faqItems } from 'data'
import narentineIllustrationImage from 'public/assets/narentine-illustration.png'

const Home: NextPage = () => {
	return (
		<>
			<Header />

			<Main>
				<Section id='articles'>
					<ArticleList items={articleItems} />
				</Section>

				<Section id='showcase'>
					<CollectionShowcase collection={exampleCollection} />
				</Section>

				<Section id='faq' title='FAQ'>
					<Box display='flex'>
						<AccordionList items={faqItems} mr={{ md: 4 }} />
						<Hidden mdDown>
							<img src={narentineIllustrationImage.src} alt='' className='illustration-image' />
						</Hidden>
					</Box>
				</Section>

				<Section id='team' title='Core Team'>
					<AvatarList items={teamMembers} />
				</Section>
			</Main>

			<Footer />
		</>
	)
}

export default Home
