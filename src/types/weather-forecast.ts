export type ServerCurrentWeatherForecast = {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	current_units: {
		time: string;
		interval: string;
		temperature_2m: string;
		relative_humidity_2m: string;
		apparent_temperature: string;
		is_day: string;
		precipitation: string;
		weather_code: string;
		wind_speed_10m: string;
		wind_direction_10m: string;
	};
	current: {
		time: string;
		interval: number;
		temperature_2m: number;
		relative_humidity_2m: number;
		apparent_temperature: number;
		is_day: number;
		precipitation: number;
		weather_code: number;
		wind_speed_10m: number;
		wind_direction_10m: number;
	};
}


export type ServerHourlyWeatherForecast = {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	hourly_units: {
		time: string;
		temperature_2m: string;
		precipitation_probability: string;
		weather_code: string;
	};
	hourly: {
		time: string[];
		temperature_2m: number[];
		precipitation_probability: number[];
		weather_code: number[];
	};
}

export type ServerDailyWeatherForecast = {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	daily_units: {
		time: string;
		weather_code: string;
		temperature_2m_max: string;
		temperature_2m_min: string;
		precipitation_probability_max: string;
		wind_speed_10m_max: string;
	};
	daily: {
		time: string[];
		weather_code: number[];
		temperature_2m_max: number[];
		temperature_2m_min: number[];
		precipitation_probability_max: number[];
		wind_speed_10m_max: number[];
	};
}

export type DayWeatherForecast ={
	date: string;
	nameDay: string;
	minTemp: number;
	maxTemp: number;
	weatherCode: number;
	weatherIcon: string;
	weatherDescription: string;
	precipitationProbability: number;
	windSpeed: number;
}



export type DailyWeatherForecast = {
	daily: DayWeatherForecast[]
	
}


export type HourWeatherForecast = {
	time: string;
	temperature: number;
	precipitationProbability: number;
	weatherCode: number;
	weatherIcon: string;
	weatherDescription: string;
}

export type HourlyWeatherForecast = {
	hourly: HourWeatherForecast[]
}


export type CurrentWeatherForecast = {
	nameDay: string;
	elevation: number;
	time: string;
	interval: number;
	temperature: number;
	relativeHumidity: number;
	apparentTemperature: number;
	isDay: boolean;
	precipitation: number;
	weatherCode: number;
	weatherIcon: string;
	windSpeed: number;
	windDirection: number;
	weatherDescription: string;
}