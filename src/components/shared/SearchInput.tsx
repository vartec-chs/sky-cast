import { useTheme } from 'next-themes'
import { FC, useDebugValue, useEffect, useRef, useState } from 'react'
import { useClickAway, useDebounce } from 'react-use'

import { Search, X } from 'lucide-react'

import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { useUserLocality } from '@/store/useUserLocality'
import { Locality } from '@/types/locality'
import Link from 'next/link'

interface Props {
	className?: string
	onClose?: () => void
}

export const SearchInput: FC<Props> = ({ className, onClose }) => {
	const userLocality = useUserLocality()
	const { theme } = useTheme()
	const [focused, setFocused] = useState(false)
	const ref = useRef(null)
	const [search, setSearch] = useState('')
	const [locality, setLocality] = useState<Locality[]>()

	const [, cancel] = useDebounce(
		() => {
			fetch(`https://nominatim.openstreetmap.org/search?q=${search}&format=json&limit=5`)
				.then((res) => res.json())
				.then((data) => setLocality(data))
		},
		500,
		[search],
	)

	useClickAway(ref, () => {
		setFocused(false), onClose && onClose()
	})

	const onSelect = (locality: Locality) => {
		console.log(locality.display_name)
		setSearch(locality.display_name)
		userLocality.setLocality({ lat: locality.lat, lon: locality.lon, name: locality.display_name })
		setLocality(undefined)
		setFocused(false)
		onClose && onClose()
	}

	return (
		<>
			{focused && (
				<div className='absolute h-dvh  top-0 left-0 bottom-0 right-0 bg-black/50 z-30' />
			)}

			<div
				ref={ref}
				className={cn(
					'w-full border rounded-md relative p-2.5 px-3 flex items-center gap-3 z-30 bg-white',
					className,
					{ 'bg-white': theme === 'light' },
					{ 'bg-slate-900': theme === 'dark' },
				)}
			>
				<Search size={20} className='text-slate-400' />
				<input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					type='text'
					placeholder='Поиск...'
					className='w-full border-0 bg-transparent px-0 text-sm placeholder:text-muted-foreground focus:ring-0 outline-none'
					onFocus={() => setFocused(true)}
				/>
				<X
					size={20}
					className={cn('cursor-pointer text-slate-400', { 'invisible opacity-0': !search })}
					onClick={() => setSearch('')}
				/>

				{locality && locality.length > 0 && (
					<div
						className={cn(
							'absolute left-0 top-14 rounded-md w-full bg-white p-2 shadow-md transition-all duration-200 invisible opacity-0 z-30 flex flex-col gap-1 scrollbar',
							{ 'visible opacity-100 top-12': focused },
							{ 'bg-slate-900': theme === 'dark' },
						)}
					>
						{locality?.map((loc, i) => (
							<Link key={i} href={`${loc.lat}-${loc.lon}`} onClick={() => onSelect(loc)}>
								<div className='p-2 hover:opacity-60 rounded-md border'>{loc.display_name}</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	)
}
