import { Collection } from 'models'

// backgrounds
import backgroundDaske from 'public/assets/traits/background/daske.png'
import backgrounPleter from 'public/assets/traits/background/pleter.png'

// clothes
import clothStripShirtGreen from 'public/assets/traits/cloth/stripe-shirt-green.png'
import clothTraditionalVestMenGreen from 'public/assets/traits/cloth/traditional-vest-men-green.png'
import clothTraditionalVestWomanPink from 'public/assets/traits/cloth/traditional-vest-women-pink.png'

// eye colors
import eyeColorBlack from 'public/assets/traits/eye-color/black.png'
import eyeColorHylaArborea from 'public/assets/traits/eye-color/hyla-arborea.png'

// eye types
import eyeTypeHorizontal from 'public/assets/traits/eye-type/horizontal.png'
import eyeTypeRound from 'public/assets/traits/eye-type/round.png'

// headwears
import headwearBandanaRed from 'public/assets/traits/headwear/bandana-red.png'
import headwearLashesAlbino from 'public/assets/traits/headwear/lashes-albino.png'
import headwearNobleHatRed from 'public/assets/traits/headwear/noble-hat-red.png'

// mouths
import mouthBasic from 'public/assets/traits/mouth/basic.png'
import mouthReed from 'public/assets/traits/mouth/reed.png'
import mouthSilverRing from 'public/assets/traits/mouth/silver-ring.png'

// necklaces
import necklaceCrystalBlue from 'public/assets/traits/necklace/crystal-blue.png'
import necklaceScarfBlue from 'public/assets/traits/necklace/scarf-blue.png'

// noses
import noseRing from 'public/assets/traits/nose/nose-ring.png'

// skins
import skinRanaArvalisFemale from 'public/assets/traits/skin/rana-arvalis-female.png'
import skinRanaArvalisMale from 'public/assets/traits/skin/rana-arvalis-male.png'

// shades
import shadeBasic from 'public/assets/traits/shade/basic.png'

const backgrounds = [backgroundDaske.src, backgrounPleter.src]
const clothes = ['', clothStripShirtGreen.src, clothTraditionalVestMenGreen.src, clothTraditionalVestWomanPink.src]
const eyeColors = ['', eyeColorBlack.src, eyeColorHylaArborea.src]
const eyeTypes = [eyeTypeHorizontal.src, eyeTypeRound.src]
const headwears = ['', headwearBandanaRed.src, headwearLashesAlbino.src, headwearNobleHatRed.src]
const mouths = [mouthBasic.src, mouthReed.src, mouthSilverRing.src]
const necklaces = ['', necklaceCrystalBlue.src, necklaceScarfBlue.src]
const noses = ['', noseRing.src]
const skins = [skinRanaArvalisFemale.src, skinRanaArvalisMale.src]
const shades = ['', '', '', '', shadeBasic.src]

export const exampleCollection: Collection = {
	name: 'Narentine',
	size: 8888,
	traits: [
		{ name: 'Background', images: backgrounds, order: 1 },
		{ name: 'Skin', images: skins, order: 2 },
		{ name: 'Shade', images: shades, order: 3 },
		{ name: 'Mouth', images: mouths, order: 4 },
		{ name: 'Eye color', images: eyeColors, order: 5 },
		{ name: 'Eye type', images: eyeTypes, order: 6 },
		{ name: 'Clothes', images: clothes, order: 7 },
		{ name: 'Necklace', images: necklaces, order: 8 },
		{ name: 'Nose', images: noses, order: 9 },
		{ name: 'Headwear', images: headwears, order: 10 },
	],
}
