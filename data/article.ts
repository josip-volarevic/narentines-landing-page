import { ArticleProps } from 'components/layout/Article'
import { GridProps } from '@mui/material/Grid'

import amphoraIcon from 'public/assets/icons/amphora-icon.png'
import flagIcon from 'public/assets/icons/flag-icon.png'
import lootIcon from 'public/assets/icons/loot-icon.png'
import merchIcon from 'public/assets/icons/merch-icon.png'
import pirateIcon from 'public/assets/icons/pirate-icon.png'
import raidsIcon from 'public/assets/icons/raids-icon.png'

interface ArticleGridItem {
	gridProps: GridProps & { xs: number; md: number }
	articleProps: ArticleProps
}

export const articleItems: ArticleGridItem[] = [
	{
		gridProps: { xs: 12, md: 6 },
		articleProps: {
			index: 1,
			title: 'Build an amazing community',
			text: "Gather pirates lovers' across social medias",
			icon: {
				src: pirateIcon.src,
				position: {
					top: {
						xs: '23%',
						md: '56%',
					},
					left: {
						xs: '78%',
						md: '2%',
					},
				},
				transform: 'rotate(-18deg)',
			},
		},
	},
	{
		gridProps: { xs: 12, md: 6 },
		articleProps: {
			index: 2,
			title: 'Minting',
			text: 'Bring your favorite rum drinker on the Solana blockchain.',
			icon: {
				src: flagIcon.src,
				position: {
					top: {
						xs: '12%',
						md: '22%',
					},
					left: {
						xs: '16%',
						md: '72%',
					},
				},
				transform: 'rotate(24deg)',
			},
		},
	},
	{
		gridProps: { xs: 12, md: 6 },
		articleProps: {
			index: 3,
			title: 'Staking',
			text: 'Let your Narentine enjoy and hang out with other Narentines, while you get $GOODS in return.',
			icon: {
				src: lootIcon.src,
				position: {
					top: {
						xs: '108%',
						md: '30%',
					},
					left: {
						xs: '80%',
						md: '82%',
					},
				},
				transform: 'rotate(-26deg)',
			},
		},
	},
	{
		gridProps: { xs: 12, md: 6 },
		articleProps: {
			index: 4,
			title: 'Preparation for raids',
			text: 'Use your $GOODS to build your ships and equip the crew. They will need all the advantage they can get on those mysterious seas.',
		},
	},
	{
		gridProps: { xs: 12, md: 6 },
		articleProps: {
			index: 5,
			title: 'Go on raids',
			text: 'Send your ships on expeditions. Let the crew roam through the paths that are still unknown to the rest of the world and be amazed on what precious items they bring back.',
			icon: {
				src: raidsIcon.src,
				position: {
					top: {
						xs: '4%',
						md: '78%',
					},
					left: {
						xs: '14%',
						md: '2%',
					},
				},
				transform: 'rotate(-30deg)',
			},
		},
	},
	{
		gridProps: { xs: 12, md: 6 },
		articleProps: {
			index: 6,
			title: 'Amphora aged wine',
			text: 'After hard raids is there any better way to relax then with the bottle of rum? Wll, there is! Relax with a wine, aged under the sea, and guarded by mysterious creatures.',
			icon: {
				src: amphoraIcon.src,
				position: {
					top: {
						xs: '16%',
						md: '34%',
					},
					left: {
						xs: '82%',
						md: '86%',
					},
				},
				transform: 'rotate(8deg)',
			},
		},
	},
	{
		gridProps: { xs: 12, md: 12 },
		articleProps: {
			index: 7,
			title: 'Dress like a proper pirate',
			text: "What is a good pirate without, let's say: tricorne or maybe an eye-patch? Not only that you will be the fierce ruler of the seas, but you will also be the most stylish ruler as well",
			icon: {
				src: merchIcon.src,
				position: {
					top: {
						xs: '100%',
						md: '42%',
					},
					left: {
						xs: '78%',
						md: '92%',
					},
				},
				transform: 'rotate(16deg)',
			},
		},
	},
].sort((curr, next) => curr.articleProps.index - next.articleProps.index)
