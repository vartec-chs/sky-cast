import { useEffect, useState } from 'react'

import { LoaderCircle } from 'lucide-react'

import { HourCard } from './HourCard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { useUserLocality } from '@/store/useUserLocality'
import { HourlyWeatherForecast } from '@/types/weather-forecast'

const data = [
	{ time: '00:00', temp: 15 },
	{ time: '01:00', temp: 15 },
	{ time: '02:00', temp: 18 },
	{ time: '03:00', temp: -20 },
	{ time: '04:00', temp: 0 },
	{ time: '05:00', temp: 15 },
	{ time: '06:00', temp: 15 },
	{ time: '07:00', temp: 18 },
	{ time: '08:00', temp: -20 },
	{ time: '09:00', temp: 0 },
]

export function HoursTemp() {
	const locality = useUserLocality((state) => state.locality)
	const [weather, setWeather] = useState<HourlyWeatherForecast | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		async function getWeather() {
			setIsLoading(true)
			const response = await fetch(
				`/api/weather-forecast/hourly?lat=${locality?.lat}&lon=${locality?.lon}`,
			)
			const data = (await response.json()) as HourlyWeatherForecast
			setWeather(data)
			setIsLoading(false)
		}
		if (locality) getWeather()
	}, [locality])

	return (
		<Card className='flex-1 rounded-3xl w-full'>
			<CardHeader className='p-4'>
				<CardTitle>Температура</CardTitle>
				<CardDescription>Средняя за 24 часа</CardDescription>
			</CardHeader>
			<CardContent
				className={cn('grid grid-cols-1 p-0 px-4 pb-4', {
					'min-h-[175px]': isLoading,
				})}
			>
				{isLoading && <LoaderCircle className='w-12 h-12 m-auto animate-spin' />}
				{/* <Carousel
					opts={{
						align: 'start',
					}}
					className='w-full'
				>
					<CarouselContent>
						{data.map((item) => (
							<CarouselItem key={item.time} className='basis-2/6 xl:basis-[12.5%]'>
								<HourCard {...item} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel> */}
				{!isLoading && weather && (
					<div className='w-full flex gap-2 overflow-auto scrollbar '>
						{weather.hourly.map((item, index) => (
							<HourCard
								precipitationProbability={item.precipitationProbability}
								key={index}
								icon={item.weatherIcon}
								temp={item.temperature}
								time={item.time}
							/>
						))}
					</div>
				)}
				{/* <div className='w-full flex gap-4 overflow-auto scrollbar '>
						{data.map((item, index) => (
							<HourCard key={index} {...item} icon='/icons/clear-day.svg' precipitationProbability={15}/>
						))}
					</div> */}
			</CardContent>
		</Card>
	)
}
