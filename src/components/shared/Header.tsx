'use client'

import { useTheme } from 'next-themes'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { useClickAway } from 'react-use'

import { MapPin, Moon, Search, Sun } from 'lucide-react'

import { Button } from '../ui/button'
import { SearchInput } from './SearchInput'
import { cn } from '@/lib/utils'
import { useUserLocality } from '@/store/useUserLocality'
import { LatLonLocality } from '@/types/locality'
import Image from 'next/image'

export function Header() {
	const setLocality = useUserLocality((state) => state.setLocality)
	const { setTheme, theme } = useTheme()
	const [focused, setFocused] = useState(false)
	const ref = useRef(null)
	useClickAway(ref, () => setFocused(false))

	const getGeoLocation = () => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords
				fetch(
					`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
				)
					.then((res) => res.json())
					.then((data: LatLonLocality) => {
						setLocality({
							lat: String(latitude),
							lon: String(longitude),
							name: data.address.state + ', ' + data.address.city,
						})
					})
					.catch(() => {
						toast.error('Не удалось определить местоположение!')
					})
			},
			() => {
				toast.error('Не удалось определить местоположение!')
			},
		)
	}

	return (
		<header className='sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b-2'>
			<div className='container px-4 flex h-14 max-w-screen-xl items-center justify-between'>
				<div className={cn('flex flex-1 gap-1', { hidden: focused })}>
					<Image
						src={theme === 'dark' ? '/favicon-light.svg' : '/favicon.svg'}
						alt='Logo'
						width={32}
						height={32}
					/>
					<h1 className='scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl'>
						SkyCast
					</h1>
				</div>

				<div
					ref={ref}
					className={cn(
						'w-full z-10 bg-background transition-all invisible duration-200',
						focused ? 'block visible opacity-100' : 'opacity-0',
					)}
				>
					<SearchInput onClose={() => setFocused(false)} />
				</div>

				<div className='flex items-center justify-between space-x-4'>
					<div className={cn('w-80 flex-1 gap-3 flex max-lg:hidden')}>
						<SearchInput />
					</div>
					<nav className={cn('flex items-center gap-4', { hidden: focused })}>
						<Button
							className='lg:hidden'
							variant='outline'
							size='icon'
							onClick={() => setFocused(true)}
						>
							<Search className='h-4 w-4' />
						</Button>

						<Button variant='outline' size='icon' onClick={getGeoLocation}>
							<MapPin className='h-4 w-4' />
						</Button>

						<Button
							variant='outline'
							size='icon'
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						>
							{theme === 'dark' ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />}
						</Button>
					</nav>
				</div>
			</div>
		</header>
	)
}
