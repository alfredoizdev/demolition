import Banner from '@/components/ui/Banner/Banner.component'
import Navbar from '@/components/ui/Navbar/Navbar.component'
import '@/styles/globals.scss';
import { Inter } from '@next/font/google'
import Footer from '@/components/ui/Footer/Footer.component'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {

	return (
		<html lang="en">
			<head />
			<body className={inter.className}>
				<Navbar />
				<Banner />
				{children}
				<Footer />
			</body>
		</html>
	)
}
