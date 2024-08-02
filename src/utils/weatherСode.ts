

interface WeatherDescription {
	description: string;
	image: string;
}

const weatherCode: { [key: string]: { day: WeatherDescription; night: WeatherDescription } } = {
	"0": {
		day: {
			description: "Солнечно",
			image: "/icons/clear-day.svg"
		},
		night: {
			description: "Ясно",
			image: "/icons/clear-night.svg"
		}
	},
	"1": {
		day: {
			description: "В основном солнечно",
			image: "/icons/clear-day.svg"
		},
		night: {
			description: "В основном ясно",
			image: "/icons/clear-night.svg"
		}
	},
	"2": {
		day: {
			description: "Переменная облачность",
			image: "/icons/partly-cloudy-day.svg"
		},
		night: {
			description: "Переменная облачность",
			image: "/icons/partly-cloudy-night.svg"
		}
	},
	"3": {
		day: {
			description: "Облачно",
			image: "/icons/cloudy.svg"
		},
		night: {
			description: "Облачно",
			image: "/icons/cloudy.svg"
		}
	},
	"45": {
		day: {
			description: "Туманно",
			image: "/icons/mist.svg"
		},
		night: {
			description: "Туманно",
			image: "/icons/mist.svg"
		}
	},
	"48": {
		day: {
			description: "Изморозь",
			image: "/icons/snowflake.svg"
		},
		night: {
			description: "Изморозь",
			image: "/icons/snowflake.svg"
		}
	},
	"51": {
		day: {
			description: "Легкий моросящий дождь",
			image: "/icons/partly-cloudy-day-drizzle.svg"
		},
		night: {
			description: "Легкий моросящий дождь",
			image: "/icons/partly-cloudy-night-drizzle.svg"
		}
	},
	"53": {
		day: {
			description: "Моросящий дождь",
			image: "/icons/partly-cloudy-day-drizzle.svg"
		},
		night: {
			description: "Моросящий дождь",
			image: "/icons/partly-cloudy-night-drizzle.svg"
		}
	},
	"55": {
		day: {
			description: "Сильный моросящий дождь",
			image: "/icons/partly-cloudy-day-drizzle.svg"
		},
		night: {
			description: "Сильный моросящий дождь",
			image: "/icons/partly-cloudy-night-drizzle.svg"
		}
	},
	"56": {
		day: {
			description: "Легкий замерзающий моросящий дождь",
			image: "/icons/partly-cloudy-day-sleet.svg"
		},
		night: {
			description: "Легкий замерзающий моросящий дождь",
			image: "/icons/partly-cloudy-night-sleet.svg"
		}
	},
	"57": {
		day: {
			description: "Замерзающий моросящий дождь",
			image: "/icons/partly-cloudy-day-sleet.svg"
		},
		night: {
			description: "Замерзающий моросящий дождь",
			image: "/icons/partly-cloudy-night-sleet.svg"
		}
	},
	"61": {
		day: {
			description: "Легкий дождь",
			image: "/icons/partly-cloudy-day-rain.svg"
		},
		night: {
			description: "Легкий дождь",
			image: "/icons/partly-cloudy-night-rain.svg"
		}
	},
	"63": {
		day: {
			description: "Дождь",
			image: "/icons/partly-cloudy-day-rain.svg"
		},
		night: {
			description: "Дождь",
			image: "/icons/partly-cloudy-night-rain.svg"
		}
	},
	"65": {
		day: {
			description: "Сильный дождь",
			image: "/icons/partly-cloudy-day-rain.svg"
		},
		night: {
			description: "Сильный дождь",
			image: "/icons/partly-cloudy-night-rain.svg"
		}
	},
	"66": {
		day: {
			description: "Легкий замерзающий дождь",
			image: "/icons/rain.svg"
		},
		night: {
			description: "Легкий замерзающий дождь",
			image: "/icons/rain.svg"
		}
	},
	"67": {
		day: {
			description: "Замерзающий дождь",
			image: "/icons/rain.svg"
		},
		night: {
			description: "Замерзающий дождь",
			image: "/icons/rain.svg"
		}
	},
	"71": {
		day: {
			description: "Легкий снег",
			image: "/icons/partly-cloudy-day-snow.svg"
		},
		night: {
			description: "Легкий снег",
			image: "/icons/partly-cloudy-night-snow.svg"
		}
	},
	"73": {
		day: {
			description: "Снег",
			image: "/icons/partly-cloudy-day-snow.svg"
		},
		night: {
			description: "Снег",
			image: "/icons/partly-cloudy-night-snow.svg"
		}
	},
	"75": {
		day: {
			description: "Сильный снег",
			image: "/icons/partly-cloudy-day-snow.svg"
		},
		night: {
			description: "Сильный снег",
			image: "/icons/partly-cloudy-night-snow.svg"
		}
	},
	"77": {
		day: {
			description: "Снежная крупа",
			image: "/icons/partly-cloudy-day-snow.svg"
		},
		night: {
			description: "Снежная крупа",
			image: "/icons/partly-cloudy-night-snow.svg"
		}
	},
	"80": {
		day: {
			description: "Легкий ливень",
			image: "/icons/partly-cloudy-day-drizzle.svg"
		},
		night: {
			description: "Легкий ливень",
			image: "/icons/partly-cloudy-day-drizzle.svg"
		}
	},
	"81": {
		day: {
			description: "Ливень",
			image: "/icons/partly-cloudy-day-rain.svg"
		},
		night: {
			description: "Ливень",
			image: "/icons/partly-cloudy-night-rain.svg"
		}
	},
	"82": {
		day: {
			description: "Сильный ливень",
			image: "/icons/partly-cloudy-day-rain.svg"
		},
		night: {
			description: "Сильный ливень",
			image: "/icons/partly-cloudy-night-rain.svg"
		}
	},
	"85": {
		day: {
			description: "Легкий снегопад",
			image: "/icons/partly-cloudy-day-snow.svg"
		},
		night: {
			description: "Легкий снегопад",
			image: "/icons/partly-cloudy-night-snow.svg"
		}
	},
	"86": {
		day: {
			description: "Снегопад",
			image: "/icons/partly-cloudy-day-snow.svg"
		},
		night: {
			description: "Снегопад",
			image: "/icons/partly-cloudy-night-snow.svg"
		}
	},
	"95": {
		day: {
			description: "Гроза",
			image: "/icons/thunderstorms-day.svg"
		},
		night: {
			description: "Гроза",
			image: "/icons/thunderstorms-night.svg"
		}
	},
	"96": {
		day: {
			description: "Легкая гроза с градом",
			image: "/icons/thunderstorms-day.svg"
		},
		night: {
			description: "Легкая гроза с градом",
			image: "/icons/thunderstorms-night.svg"
		}
	},
	"99": {
		day: {
			description: "Гроза с градом",
			image: "/icons/thunderstorms-day.svg"
		},
		night: {
			description: "Гроза с градом",
			image: "/icons/thunderstorms-night.svg"
		}
	}
};

export function getWeatherDescription(code: number , isDay: number ): WeatherDescription  {
	const status = isDay === 1 ? 'day' : 'night';
	return weatherCode[String(code)]?.[status];
}
