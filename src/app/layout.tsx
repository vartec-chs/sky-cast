import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import './globals.css'
import { Header } from '@/components/shared/Header'
import { cn } from '@/lib/utils'
import { Rubik } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { ToasterWrapper } from '@/components/ToasterWrapper'

const inter = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'SkyCast',
	description: 'Прогноз погоды',
	authors: {
		name: 'Vartec',
	},
	icons: {
		shortcut: '/favicon.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={cn('bg-background font-sans antialiased scrollbar', inter.className)}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<ToasterWrapper />
					<Header />
					<main className='container px-4 max-w-screen-xl'>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
