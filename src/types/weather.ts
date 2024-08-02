/*
{
  "latitude": 51.6875,
  "longitude": 39.1875,
  "generationtime_ms": 0.0410079956054688,
  "utc_offset_seconds": 10800,
  "timezone": "Europe/Moscow",
  "timezone_abbreviation": "MSK",
  "elevation": 154,
  "current_units": {
    "time": "iso8601",
    "interval": "seconds",
    "temperature_2m": "°C",
    "relative_humidity_2m": "%",
    "apparent_temperature": "°C",
    "is_day": "",
    "precipitation": "mm",
    "weather_code": "wmo code",
    "wind_speed_10m": "m/s",
    "wind_direction_10m": "°"
  },
  "current": {
    "time": "2024-07-31T23:15",
    "interval": 900,
    "temperature_2m": 17.5,
    "relative_humidity_2m": 75,
    "apparent_temperature": 17.5,
    "is_day": 0,
    "precipitation": 0,
    "weather_code": 0,
    "wind_speed_10m": 1.8,
    "wind_direction_10m": 273
  }
}
*/

export type OneDayWeatherForecast = {
	latitude: number,
	longitude: number,
	current: {
		time: string,
		interval: number,
		temperature_2m: number,
		relative_humidity_2m: number,
		apparent_temperature: number,
		is_day: number,
		precipitation: number,
		weather_code: number,
		wind_speed_10m: number,
		wind_direction_10m: number
	}
}