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
			text: 'Gather fellow pirate lovers from the high seas of the internet.',
			icon: {
				src: pirateIcon,
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
			text: 'Bring your staunch rum drinker to the Solana blockchain and raise the sails for an adventure!',
			icon: {
				src: flagIcon,
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
			text: 'Let your own Narentine enjoy another grog while socialising with other Narentines, and get some $GOODS in return.',
			icon: {
				src: lootIcon,
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
			text: "Use your $GOODS to build your sturdy ships and equip your brave and skilled crew. They'll need all the help they can get to keep the advantages while sailing those mysterious seas.",
		},
	},
	{
		gridProps: { xs: 12, md: 6 },
		articleProps: {
			index: 5,
			title: 'Go on raids',
			text: 'Send your ships on expeditions. Let the crew roam along the untrodden paths, still unknown to the local men, let alone to the rest of the world and just be amazed at what precious items they bring back.',
			icon: {
				src: raidsIcon,
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
			text: 'After hard raids, is there any better way to relax than with a bottle of rum? As a matter of fact, there is! Relax with wine, aged under the sea, guarded by mysterious creatures. All the thrill makes it taste even better...take our word for it!',
			icon: {
				src: amphoraIcon,
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
			text: "Are you a pirate anyway without, let's say, a tricorne or maybe an eye patch? No true pirate would ever pass the possibility to look like one as well. Therefore, not only will you be the fierce ruler of the seas, but you will be the most stylish fierce ruler if we had a say in it.",
			icon: {
				src: merchIcon,
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
