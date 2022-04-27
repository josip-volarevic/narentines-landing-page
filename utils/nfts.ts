import { Collection, DummyNFT } from 'models'
import mergeImages from 'merge-images'
import { generateRandom } from 'utils'

export const generateNft = async (collection: Collection): Promise<DummyNFT> => {
	const number = generateRandom(collection.size)
	const randomTraitImages = collection.traits
		.sort((curr, next) => curr.order - next.order)
		.map((t) => {
			const index = generateRandom(t.images.length)
			const activeImage = t.images[Math.abs(index) % t.images.length]
			return activeImage
		})
		.filter((ti) => !!ti)
	const image = await mergeImages(randomTraitImages)

	return { number, image }
}
