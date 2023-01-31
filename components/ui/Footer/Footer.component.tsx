import Link from 'next/link';
import styles from './Footer.module.scss';


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

const Footer = () => {
	return (<footer className={styles.footer}>
		<section className={styles.footerContent}>
			<article className={styles.navigation}>
				<h2>Navigation</h2>
				<ol>
					{menu.map((item) => (
						<li key={item.label}>
							<Link href={item.target}>
								{item.label}
							</Link>
						</li>
					))}
				</ol>
			</article>
		</section>
		<section className={styles.contact}>
			<h2>Contact</h2>
			<ol>
				<li>cell: 908 456 9800</li>
				<li>fax: 456 675 4566</li>
				<li>kingdemolition@email.com</li>
			</ol>
		</section>
	</footer>);
}

export default Footer;