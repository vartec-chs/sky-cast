import { ManyDayWeatherForecast } from '@/components/shared/sections/ManyDayWeatherForecast'
import OneDayWeatherForecast from '@/components/shared/sections/OneDayWeatherForecast'

export default function Locality() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-between mt-8'>
			<OneDayWeatherForecast />
			<ManyDayWeatherForecast />
		</div>
	)
}
