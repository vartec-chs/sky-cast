import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'

type Props = {
	time: string
	temp: number
	icon: string
	precipitationProbability: number
}

export function HourCard<T extends Props>({ time, temp, icon, precipitationProbability }: T) {
	return (
		<Card className='flex-1 rounded-2xl px-2 py-2 min-w-20 border-none shadow-none'>
			<CardHeader className='px-2 py-0'>
				<p className='text-md text-center text-muted-foreground'>{time}</p>
			</CardHeader>

			<CardContent className='flex flex-col items-center justify-center gap-2 px-2 py-0'>
				<Image src={icon} alt='Logo' width={78} height={78} />
				<p className='text-sm text-center font-bold'>{temp}°C</p>
				<p className='text-sm text-center text-blue-500'>{precipitationProbability}%</p>
			</CardContent>
		</Card>
	)
}
