import styles from './Navbar.module.scss';
import Link from 'next/link';
import Brand from '../Brand/Brand.component';
import Button from '../Button/Button.component';
import { BsJustify } from "react-icons/bs";


interface Menu {
	label: string,
	target: string,
	alt: string,
}

const menu: Menu[] = [{
	label: 'home',
	target: '/',
	alt: 'home page'
},
{
	label: 'Services',
	target: 'services',
	alt: 'services page'
},
{
	label: 'About',
	target: 'about',
	alt: 'about page'
},
{
	label: 'Contact us',
	target: '/',
	alt: 'contact page'
}
]

const Navbar = () => {
	return (
		<div className={styles.navBg}>
			<nav className={styles.navContainer}>
				<div className={styles.logo}>
					<Brand />
				</div>
				<ol className={styles.nav}>
					{menu.map((item) => (
						<li key={item.label}>
							<Link href={item.target}>
								{item.label}
							</Link>
						</li>
					))}
				</ol>
				<div className={styles.getConsultant}>
					<Button color='primary' text='Get Consultant' goTo='/' />
				</div>
				<button className={styles.mobileMenu}><BsJustify /></button>
			</nav>
		</div >

	);
}

export default Navbar;