import { ServerHourlyWeatherForecast, HourlyWeatherForecast, HourWeatherForecast, ServerDailyWeatherForecast, DailyWeatherForecast } from "@/types/weather-forecast"
import { getWeatherDescription } from "@/utils/weatherСode"

import { NextRequest, NextResponse } from "next/server"



export const GET = async (reqwest: NextRequest) => {
	const params = reqwest.nextUrl.searchParams

	const lat = params.get('lat')
	const lon = params.get('lon')	
	const days = params.get('days')
	
	if (!lat || !lon || !days) {
		return new Response(JSON.stringify(null))
	}

	try {
		const response = await fetch(
		`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=Europe%2FMoscow&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&wind_speed_unit=ms&forecast_days=${days}`
		)
		const data = await response.json() as ServerDailyWeatherForecast
		if (!data) {
			return new Response(JSON.stringify(null))
		}

		const responseData: DailyWeatherForecast = {
			daily: data.daily.time.map((time, index) => {
				const weatherCode = data.daily.weather_code[index]
				
				const date = new Date(time)

				const isDay = date.getHours() >= 6 && date.getHours() <= 18
				const weatherData = getWeatherDescription(weatherCode, isDay ? 1 : 0)

				const dayOfTheWeek = date.getDay() !== 0 ? date.getDay() - 1 : 6
				const nameDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'][dayOfTheWeek]

	
				return {
					date: String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') ,
					nameDay: nameDay,
					minTemp: data.daily.temperature_2m_min[index],
					maxTemp: data.daily.temperature_2m_max[index],
					precipitationProbability: data.daily.precipitation_probability_max[index],
					weatherCode: data.daily.weather_code[index],
					weatherDescription: weatherData.description,
					weatherIcon: weatherData.image,
					windSpeed: data.daily.wind_speed_10m_max[index],
				}
			})
		}



		return NextResponse.json(responseData)

	} catch (error) {
		console.log(error)
		return NextResponse.json(null)
	}
}