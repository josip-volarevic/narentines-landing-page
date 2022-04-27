import { Collection } from 'models'

// backgrounds
import backgroundDaske1 from 'public/assets/traits/backgrounds/background-daske.png'
import backgroundKarst1 from 'public/assets/traits/backgrounds/background-karst.png'

// clothes
import featherCollarPink2 from 'public/assets/traits/clothes/feather-collar-pink.png'
import fishboneArmorRed2 from 'public/assets/traits/clothes/fishbone-armor-red.png'
import fishscaleArmorWhite2 from 'public/assets/traits/clothes/fishscale-armor-white.png'
import jester2 from 'public/assets/traits/clothes/jester.png'

// eye-colors
import albino3 from 'public/assets/traits/eye-colors/albino.png'
import black3 from 'public/assets/traits/eye-colors/black.png'
import bombinaBombina3 from 'public/assets/traits/eye-colors/bombina-bombina.png'
import bombinaVariegata3 from 'public/assets/traits/eye-colors/bombina-variegata.png'
import bufoBufo3 from 'public/assets/traits/eye-colors/bufo-bufo.png'
import bufoViridis3 from 'public/assets/traits/eye-colors/bufo-viridis.png'

// eyes
import bandage4 from 'public/assets/traits/eyes/bandage.png'
import blind4 from 'public/assets/traits/eyes/blind.png'
import closed4 from 'public/assets/traits/eyes/closed.png'
import fire4 from 'public/assets/traits/eyes/fire.png'
import horizontal4 from 'public/assets/traits/eyes/horizontal.png'
import round4 from 'public/assets/traits/eyes/round.png'
import scared4 from 'public/assets/traits/eyes/scared.png'
import verical4 from 'public/assets/traits/eyes/verical.png'
import vine4 from 'public/assets/traits/eyes/vine.png'

// headwear
import bandanaYellow5 from 'public/assets/traits/headwear/bandana-yellow.png'
import boneCrown5 from 'public/assets/traits/headwear/bone-crown.png'
import boneHelmetBlue5 from 'public/assets/traits/headwear/bone-helmet-blue.png'
import bowYellowGreen5 from 'public/assets/traits/headwear/bow-yellow-green.png'

// mouth
import bandage6 from 'public/assets/traits/mouth/bandage.png'
import bandanaRed6 from 'public/assets/traits/mouth/bandana-red.png'
import basic6 from 'public/assets/traits/mouth/basic.png'
import boneDagger6 from 'public/assets/traits/mouth/bone-dagger.png'
import coin6 from 'public/assets/traits/mouth/coin.png'

// necklace
import bonesRed13 from 'public/assets/traits/necklace/bones-red.png'
import chainGold13 from 'public/assets/traits/necklace/chain-gold.png'
import chainSilver13 from 'public/assets/traits/necklace/chain-silver.png'
import coinsGold13 from 'public/assets/traits/necklace/coins-gold.png'
import coinsSilver13 from 'public/assets/traits/necklace/coins-silver.png'
import crystalPink13 from 'public/assets/traits/necklace/crystal-pink.png'
import crystalRed13 from 'public/assets/traits/necklace/crystal-red.png'
import fishnet13 from 'public/assets/traits/necklace/fishnet.png'
import pearls13 from 'public/assets/traits/necklace/pearls.png'
import scarfPink13 from 'public/assets/traits/necklace/scarf-pink.png'
import seaShells13 from 'public/assets/traits/necklace/sea-shells.png'
import stringCoinsGold13 from 'public/assets/traits/necklace/string-coins-gold.png'
import stringCoinsSilver13 from 'public/assets/traits/necklace/string-coins-silver.png'

// nose-and-eyes-accessory
import eyePatch13 from 'public/assets/traits/nose-and-eyes-accessory/eye-patch.png'
import noseBone13 from 'public/assets/traits/nose-and-eyes-accessory/nose-bone.png'
import noseRingGemsRed13 from 'public/assets/traits/nose-and-eyes-accessory/nose-ring-gems-red.png'
import noseRingSimpleGold13 from 'public/assets/traits/nose-and-eyes-accessory/nose-ring-simple-gold.png'
import noseRingSimpleSilver13 from 'public/assets/traits/nose-and-eyes-accessory/nose-ring-simple-silver.png'

// shade
import shade14 from 'public/assets/traits/shade/shade.png'

// skin-details
import blueTattoos15 from 'public/assets/traits/skin-details/blue-tattoos.png'
import none15 from 'public/assets/traits/skin-details/none.png'
import redTattoos15 from 'public/assets/traits/skin-details/red-tattoos.png'
import scars15 from 'public/assets/traits/skin-details/scars.png'

// skins
import albino16 from 'public/assets/traits/skins/albino.png'
import bombinaBombina16 from 'public/assets/traits/skins/bombina-bombina.png'
import bombinaVariegata16 from 'public/assets/traits/skins/bombina-variegata.png'
import bufoBufo16 from 'public/assets/traits/skins/bufo-bufo.png'
import bufoViridis16 from 'public/assets/traits/skins/bufo-viridis.png'
import hylaArborea16 from 'public/assets/traits/skins/hyla-arborea.png'
import pelobatesFuscus16 from 'public/assets/traits/skins/pelobates-fuscus.png'
import pelophylax16 from 'public/assets/traits/skins/pelophylax.png'
import ranaArvalisFemale16 from 'public/assets/traits/skins/rana-arvalis-female.png'
import ranaArvalisMale16 from 'public/assets/traits/skins/rana-arvalis-male.png'

const backgrounds = [backgroundKarst1.src, backgroundDaske1.src]
const clothes = [jester2.src, featherCollarPink2.src, fishboneArmorRed2.src, fishscaleArmorWhite2.src, '']
const eyeColors = [
	bufoBufo3.src,
	albino3.src,
	black3.src,
	bombinaBombina3.src,
	bombinaVariegata3.src,
	bufoViridis3.src,
	'',
]
const eyes = [
	scared4.src,
	closed4.src,
	bandage4.src,
	blind4.src,
	fire4.src,
	horizontal4.src,
	round4.src,
	verical4.src,
	vine4.src,
]
const headwear = [bandanaYellow5.src, boneCrown5.src, boneHelmetBlue5.src, bowYellowGreen5.src, '']
const mouth = [bandage6.src, '', bandanaRed6.src, basic6.src, boneDagger6.src, coin6.src]
const necklace = [
	'',
	bonesRed13.src,
	chainGold13.src,
	chainSilver13.src,
	coinsGold13.src,
	coinsSilver13.src,
	crystalPink13.src,
	crystalRed13.src,
	fishnet13.src,
	pearls13.src,
	scarfPink13.src,
	seaShells13.src,
	stringCoinsGold13.src,
	stringCoinsSilver13.src,
]
const noseAndEyesAccessory = [
	'',
	eyePatch13.src,
	noseBone13.src,
	noseRingGemsRed13.src,
	noseRingSimpleGold13.src,
	noseRingSimpleSilver13.src,
]
const shade = [shade14.src, '']
const skinDetails = [none15.src, blueTattoos15.src, redTattoos15.src, scars15.src]
const skins = [
	bufoBufo16.src,
	ranaArvalisFemale16.src,
	albino16.src,
	bombinaBombina16.src,
	bombinaVariegata16.src,
	bufoViridis16.src,
	hylaArborea16.src,
	pelobatesFuscus16.src,
	pelophylax16.src,
	ranaArvalisMale16.src,
]

export const exampleCollection: Collection = {
	name: 'Narentine',
	size: 8888,
	traits: [
		{ name: 'Background', images: backgrounds, zIndex: 1 },
		{ name: 'Skin', images: skins, zIndex: 2 },
		{ name: 'Skin Details', images: skinDetails, zIndex: 3 },
		{ name: 'Shade', images: shade, zIndex: 4 },
		{ name: 'Eye Color', images: eyeColors, zIndex: 5 },
		{ name: 'Eyes', images: eyes, zIndex: 6 },
		{ name: 'Mouth', images: mouth, zIndex: 7 },
		{ name: 'Clothes', images: clothes, zIndex: 8 },
		{ name: 'Necklace', images: necklace, zIndex: 9 },
		{ name: 'Nose and Eyes', images: noseAndEyesAccessory, zIndex: 10 },
		{ name: 'Headwear', images: headwear, zIndex: 11 },
	],
}
