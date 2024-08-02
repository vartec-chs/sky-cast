import { ServerHourlyWeatherForecast, HourlyWeatherForecast, HourWeatherForecast } from "@/types/weather-forecast"
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
		`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation_probability,weather_code&wind_speed_unit=ms&timezone=Europe%2FMoscow&forecast_days=1`
		)
		const data = await response.json() as ServerHourlyWeatherForecast
		if (!data) {
			return new Response(JSON.stringify(null))
		}

		const responseData: HourlyWeatherForecast = {
			hourly: data.hourly.time.map((time, index) => {
				const weatherCode = data.hourly.weather_code[index]
				
				const date = new Date(time)

				const isDay = date.getHours() >= 6 && date.getHours() <= 18
				const weatherData = getWeatherDescription(weatherCode, isDay ? 1 : 0)

	
				return {
					time: String(date.getHours() + ":00"),
					temperature: data.hourly.temperature_2m[index],
					precipitationProbability: data.hourly.precipitation_probability[index],
					weatherCode: data.hourly.weather_code[index],
					weatherDescription: weatherData.description,
					weatherIcon: weatherData.image
				}
			})
		}



		return NextResponse.json(responseData)

	} catch (error) {
		console.log(error)
		return NextResponse.json(null)
	}
}