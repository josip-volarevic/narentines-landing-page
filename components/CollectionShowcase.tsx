import React, { useCallback, useState, useEffect } from 'react'
import { Grid, GridProps, Box, IconButton, Typography } from '@mui/material'
import TextImportant from 'components/TextImportant'
import RandomizeIcon from 'public/assets/vector-icons/randomize-icon.svg'
import nIconImage from 'public/assets/icons/n-icon.png'
import dummyNftImage from 'public/assets/dummy-nft.png'
import downloadImage from 'public/assets/icons/download-image-icon.png'
import { generateNft } from 'utils'
import { useCancelablePromise } from 'hooks'
import { Collection, DummyNFT } from 'models'
import Image from 'next/image'

interface Props extends GridProps {
	collection: Collection
}

const CollectionShowcase: React.FC<Props> = ({ collection, className, ...props }) => {
	const [nft, setNft] = useState<DummyNFT>({ number: collection.size, image: dummyNftImage.src })
	const makeCancelable = useCancelablePromise()

	const randomize = useCallback(async () => {
		// TODO: Generate a dummy image server side and then serve it
		const randomNft = await makeCancelable(generateNft(collection))
		setNft(randomNft)
	}, [collection, makeCancelable])

	return (
		<Grid container spacing={4} className={`collection-showcase ${className || ''}`} {...props}>
			<Grid item xs={6} md={3} order={{ xs: 2, md: 1 }}>
				<Box textAlign='left'>
					<Typography className='collection-showcase-text'>
						{collection.name}
						<br />
						<TextImportant className='collection-showcase-text--important'>#{nft.number}</TextImportant>
						<br />
						of #{collection.size}
					</Typography>
				</Box>
			</Grid>

			<Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
				<Box className='nft-image-wrapper'>
					<Image
						src={nIconImage}
						className='short-logo'
						alt=''
						layout='raw'
						height={42}
						width={42}
						lazyBoundary='400px'
					/>
					<Image
						src='/assets/ui/nft-frame.svg'
						className='nft-overlay'
						alt=''
						layout='raw'
						height={512}
						width={512}
						lazyBoundary='400px'
					/>
					<Image
						src={nft.image}
						className='nft-image'
						alt={collection.name}
						layout='raw'
						height={512}
						width={512}
						lazyBoundary='400px'
					/>
				</Box>
			</Grid>

			<Grid item xs={6} md={3} order={{ xs: 4, md: 4 }}>
				<Box>
					<Box className='collection-showcase-actions'>
						<IconButton id='randomize-nft-button' aria-label='randomize-nft' onClick={randomize}>
							<RandomizeIcon className='collection-showcase-icon' />
						</IconButton>
						<IconButton
							aria-label='download-dummy-nft'
							id='download-dummy-nft-button'
							href={nft.image}
							download={`dummy-${collection.name}-#${nft.number}`}
						>
							<Image
								src={downloadImage}
								className='collection-showcase-icon'
								alt=''
								layout='raw'
								width={34}
								height={34}
								lazyBoundary='400px'
							/>
						</IconButton>
					</Box>
					<Typography className='collection-showcase-text'>
						Randomize
						<br />
						{collection.name}!
					</Typography>
				</Box>
			</Grid>
		</Grid>
	)
}

export default CollectionShowcase
