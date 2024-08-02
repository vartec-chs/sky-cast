import { ServerCurrentWeatherForecast, CurrentWeatherForecast } from "@/types/weather-forecast"
import { getWeatherDescription } from "@/utils/weatherСode"

import { NextRequest, NextResponse } from "next/server"



export const GET = async (reqwest: NextRequest) => {
	const params = reqwest.nextUrl.searchParams

	const lat = params.get('lat')
	const lon = params.get('lon')	
	
	if (!lat || !lon) {
		return new Response(JSON.stringify(null))
	}

	try {
		const response = await fetch(
		`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m,	wind_direction_10m&wind_speed_unit=ms&timezone=Europe%2FMoscow&forecast_days=1`
		)
		const data = await response.json() as ServerCurrentWeatherForecast
		if (!data) {
			return new Response(JSON.stringify(null))
		}

		const date = new Date(data.current.time)

		const weatherCode = data.current.weather_code
		const weatherDescription = getWeatherDescription(weatherCode, data.current.is_day)

		const dayOfTheWeek = date.getDay() !== 0 ? date.getDay() - 1 : 6
				const nameDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'][dayOfTheWeek]

		const responseData: CurrentWeatherForecast = {
			nameDay: nameDay,
			elevation: data.elevation,
			interval: data.current.interval,
			temperature: data.current.temperature_2m,
			relativeHumidity: data.current.relative_humidity_2m,
			windSpeed: data.current.wind_speed_10m,
			weatherCode: data.current.weather_code,
			windDirection: data.current.wind_direction_10m,
			time: String(date.getHours() + ":" + date.getMinutes()),
			weatherDescription: weatherDescription.description,
			weatherIcon: weatherDescription.image,
			isDay: data.current.is_day === 1 ? true : false,
			precipitation: data.current.precipitation,
			apparentTemperature: data.current.apparent_temperature
		}	
		return NextResponse.json(responseData)

	} catch (error) {
		console.log(error)
		return new Response(JSON.stringify(null))
	}
}