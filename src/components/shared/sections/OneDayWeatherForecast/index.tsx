'use client'

import { useEffect, useState } from 'react'

import { LoaderCircle } from 'lucide-react'

import { HoursTemp } from './HoursTemp'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { useUserLocality } from '@/store/useUserLocality'
import { type IpLocality } from '@/types/locality'
import { type OneDayWeatherForecast } from '@/types/weather'
import { CurrentWeatherForecast } from '@/types/weather-forecast'
import { getWeatherDescription } from '@/utils/weatherСode'
import { getWindDirection } from '@/utils/windDirection'
import Image from 'next/image'

export default function OneDayWeatherForecast() {
	const [setLocality, locality, isAutoLocality] = useUserLocality((state) => [
		state.setLocality,
		state.locality,
		state.isAutoLocality,
	])
	const [weather, setWeather] = useState<CurrentWeatherForecast | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		async function getLocality() {
			const response = await fetch(
				'http://ip-api.com/json?lang=ru&fields=status,region,regionName,city,lat,lon',
			)
			const data = (await response.json()) as IpLocality
			setLocality({
				lat: data.lat,
				lon: data.lon,
				name: data.city,
			})
		}
		if (isAutoLocality) getLocality()
	}, [])

	useEffect(() => {
		async function getWeather() {
			const response = await fetch(
				`/api/weather-forecast/current?lat=${locality?.lat}&lon=${locality?.lon}`,
			)
			const data = (await response.json()) as CurrentWeatherForecast
			setIsLoading(false)
			setWeather(data)
		}

		if (locality) getWeather()
	}, [locality])

	const date = new Date()

	return (
		<section className='flex xl:flex-row gap-4 max-lg:flex-col lg:w-full items-start w-full max-lg:gap-8'>
			<Card
				className={cn('w-96 max-md:w-full rounded-3xl', {
					'h-[260px] flex  items-center': isLoading,
				})}
			>
				{isLoading && <LoaderCircle className='w-12 h-12 m-auto animate-spin' />}
				{!isLoading && weather && (
					<>
						<CardHeader className='p-4'>
							<CardTitle className='flex flex-row items-center justify-between gap-4'>
								<p
									className={cn('zagolovok text-lg font-semibold', {
										'text-sm': locality && locality.name.length > 20,
									})}
								>
									{locality ? locality.name : '...'}
								</p>
								<div className='flex flex-col items-end'>
									<div className='flex flex-col items-center'>
										<p className='text-sm text-muted-foreground'>
											{date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()}
										</p>
										<p className='text-sm text-muted-foreground'>
											{date.getHours() + ':' + date.getMinutes()}
										</p>
									</div>

									<p className='text-sm'>{weather.nameDay}</p>
								</div>
							</CardTitle>
						</CardHeader>
						<Separator />
						<CardContent className='p-0 px-4'>
							<div className='flex flex-row items-center'>
								<Image
									src={weather ? weather.weatherIcon : '/icons/clear-day.svg'}
									alt='Logo'
									width={120}
									height={120}
								/>
								<div className='flex flex-col items-center flex-1'>
									<h1 className='scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl'>
										{weather?.temperature}°C
									</h1>
									<p className='text-sm text-muted-foreground '>
										{weather ? weather.weatherDescription : '...'}
									</p>
								</div>
							</div>
						</CardContent>
						<Separator />
						<CardFooter className='flex flex-row justify-between p-4'>
							<div className='flex flex-row items-center gap-2'>
								<Image src='/icons/wind.svg' alt='Logo' width={42} height={42} />
								<p className='text-sm text-muted-foreground '>{weather?.windSpeed} м/с</p>
							</div>
							<div className='flex flex-row items-center gap-2'>
								<Image src='/icons/raindrop.svg' alt='Logo' width={42} height={42} />
								<p className='text-sm text-muted-foreground '>{weather?.relativeHumidity}%</p>
							</div>
							<div className='flex flex-row items-center gap-2'>
								<Image src='/icons/compass.svg' alt='Logo' width={42} height={42} />
								<p className='text-sm text-muted-foreground '>
									{weather ? getWindDirection(weather.windDirection) : '...'}
								</p>
							</div>
						</CardFooter>
					</>
				)}
			</Card>
			<HoursTemp />
		</section>
	)
}
