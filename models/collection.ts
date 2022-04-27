import { ImageProps } from 'next/image'

interface CollectionTrait {
	name: string
	images: string[]
	order: number
}

export interface Collection {
	name: string
	size: number
	traits: CollectionTrait[]
}
