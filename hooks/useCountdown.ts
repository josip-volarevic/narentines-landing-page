import { useState, useEffect } from 'react'

const formatTime = (secs: number) => {
	const totalSeconds = Math.ceil(secs)

	const days = Math.floor((totalSeconds % (60 * 60 * 24 * 1000)) / (60 * 60 * 24))
	const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
	const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
	const seconds = Math.floor(totalSeconds % 60)

	return { seconds, minutes, hours, days, isDue: totalSeconds === 0 }
}

const calculateRemaningSeconds = (expirationDate?: string) => {
	if (!expirationDate) return 0
	const now = new Date().getTime()
	const milliSecondsDistance = new Date(expirationDate).getTime() - now
	if (milliSecondsDistance > 0) return milliSecondsDistance / 1000
	return 0
}

type CountdownHook = (props: { expirationDate?: string; onExpire?: () => void }) => {
	seconds: number
	minutes: number
	hours: number
	days: number
	isDue: boolean
}

export const useCountdown: CountdownHook = ({ expirationDate, onExpire }) => {
	const [remainingSeconds, setRemainingSeconds] = useState(0)
	const [isCounting, setIsCounting] = useState(false)

	useEffect(() => {
		setRemainingSeconds(calculateRemaningSeconds(expirationDate))
		setIsCounting(calculateRemaningSeconds(expirationDate) > 0)
	}, [expirationDate])

	useEffect(() => {
		const interval = setInterval(async () => {
			if (isCounting && remainingSeconds === 0) {
				if (onExpire) onExpire()
				setIsCounting(false)
			}
			setRemainingSeconds(calculateRemaningSeconds(expirationDate))
		}, 1000)

		if (!isCounting) clearInterval(interval)

		return () => clearInterval(interval)
	}, [onExpire, isCounting, remainingSeconds, expirationDate])

	return formatTime(remainingSeconds)
}

export default useCountdown
