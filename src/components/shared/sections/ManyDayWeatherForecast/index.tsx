'use client'

import { useEffect, useState } from 'react'

import { LoaderCircle } from 'lucide-react'

import { DayCard } from './DayCard'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useUserLocality } from '@/store/useUserLocality'
import { DailyWeatherForecast } from '@/types/weather-forecast'


export function ManyDayWeatherForecast() {
	const locality = useUserLocality((state) => state.locality)

	const [dayForecast, setDayForecast] = useState('3')
	const [isLoading, setIsLoading] = useState(true)

	const [weather, setWeather] = useState<DailyWeatherForecast | null>(null)

	async function getWeather(value?: string) {
		setIsLoading(true)
		const response = await fetch(
			`/api/weather-forecast/daily?lat=${locality?.lat}&lon=${locality?.lon}&days=${value ? value : dayForecast}`,
		)
		const data = (await response.json()) as DailyWeatherForecast
		setWeather(data)
		setIsLoading(false)
	}

	useEffect(() => {
		if (locality) getWeather()
	}, [locality])

	return (
		<section className='flex flex-col gap-8 my-20 items-center justify-center w-full max-w-screen-xl'>
			<h1 className='text-2xl font-bold'>
				Прогноз погоды на {dayForecast} {dayForecast === '3' ? 'дня' : 'дней'}
			</h1>
			<Tabs
				defaultValue='3'
				value={dayForecast}
				onValueChange={(value) => {
					setDayForecast(value)
					if (locality) getWeather(value)
				}}
			>
				<TabsList>
					<TabsTrigger disabled={isLoading} value='3'>
						3 дня
					</TabsTrigger>
					<TabsTrigger disabled={isLoading} value='7'>
						7 дней
					</TabsTrigger>
					<TabsTrigger disabled={isLoading} value='16'>
						16 дней
					</TabsTrigger>
				</TabsList>
			</Tabs>

			<div className='w-full grid gap-4 grid-cols-[repeat(auto-fit,minmax(8rem,1fr))]'>
				{isLoading && <LoaderCircle className='w-12 h-12 m-auto animate-spin mt-14' />}

				{!isLoading &&
					weather &&
					weather.daily.map((day, index) => <DayCard key={index} {...day} />)}
			</div>
		</section>
	)
}
