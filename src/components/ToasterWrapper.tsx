'use client'

import { useTheme } from 'next-themes'
import { Toaster } from 'react-hot-toast'

export const ToasterWrapper = () => {
	const { theme } = useTheme()
	//dark --background: 222.2 84% 4.9%;
	return (
		<Toaster
			toastOptions={{
				style: {
					color: theme === 'dark' ? '#fff' : '#000',
					backgroundColor: theme === 'dark' ? '#0a0d10' : '#fff',
					borderRadius: '1rem',
				},
			}}
		/>
	)
}
