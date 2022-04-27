import { getKeys } from 'utils'

const roman = {
	M: 1000,
	CM: 900,
	D: 500,
	CD: 400,
	C: 100,
	XC: 90,
	L: 50,
	XL: 40,
	X: 10,
	IX: 9,
	V: 5,
	IV: 4,
	I: 1,
}

export function romanize(num: number): string {
	const romanString = getKeys(roman).reduce((acc, curr) => {
		const q = Math.floor(num / roman[curr])
		num -= q * roman[curr]
		return acc + curr.repeat(q)
	}, '')

	return romanString
}

export const generateRandom = (max = 1, min = 0) => {
	return Math.floor(Math.random() * max + min)
}
