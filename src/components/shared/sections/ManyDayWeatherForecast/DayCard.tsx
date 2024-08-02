import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

interface Props {
	date: string
	nameDay?: string
	minTemp: number
	maxTemp: number
	weatherCode: number
	weatherDescription: string
	weatherIcon: string
}

export function DayCard<T extends Props>({
	date,
	minTemp,
	maxTemp,
	weatherCode,
	nameDay,
	weatherDescription,
	weatherIcon,
}: T) {
	return (
		<Card className='flex-1 rounded-3xl py-2 w-full'>
			<CardHeader className='p-2'>
				<CardTitle className='text-center text-sm'>{nameDay}</CardTitle>
				<p className='text-sm text-center text-muted-foreground'>{date}</p>
			</CardHeader>

			<CardContent className='flex flex-col items-center justify-center gap-2 p-2'>
				<Image src={weatherIcon} alt='Logo' width={42} height={42} />

				<p className='text-sm text-center font-bold'>{weatherDescription}</p>

				<p className='text-sm text-center font-bold'>
					{minTemp}°C / {maxTemp}°C
				</p>
			</CardContent>
		</Card>
	)
}
