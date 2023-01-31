import styles from './page.module.scss'
import { BsTools } from "react-icons/bs";
import Image from 'next/image';

interface service {
	title: string;
	short: string;
	content: string;
}

const services: service[] = [
	{
		title: 'Service 1',
		short: 'Some tetxt here to show as the firts argument on page Some tetxt here to show as the firts argument on page, Some tetxt here to show as the firts argument on page Some tetxt here to show as the firts argument on page',
		content: 'Some tetxt here to show as the firts argument on page, Some tetxt here to show as the firts argument on page Some tetxt here to show as the firts argument on page'
	},
	{
		title: 'Service 2',
		short: 'Some tetxt here to show as the firts argument on page Some tetxt here to show as the firts argument on page, Some tetxt here to show as the firts argument on page Some tetxt here to show as the firts argument on page',
		content: 'Some tetxt here to show as the firts argument on page, Some tetxt here to show as the firts argument on page Some tetxt here to show as the firts argument on page'
	},
	{
		title: 'Service 3',
		short: 'Some tetxt here to show as the firts argument on page Some tetxt here to show as the firts argument on page, Some tetxt here to show as the firts argument on page Some tetxt here to show as the firts argument on page',
		content: 'Some tetxt here to show as the firts argument on page, Some tetxt here to show as the firts argument on page Some tetxt here to show as the firts argument on page'
	}
]


export default function Home() {
	return (
		<main className='container'>
			<section className={styles.pageContainer}>
				<section className={styles.services}>
					{services.map((item) => (
						<article key={item.title}>
							<BsTools />
							<h2>{item.title}</h2>
							<p>{item.short}</p>
						</article>
					))}
				</section>
				<section className={styles.aboutUs}>
					<article className={styles.imgContainer}>
						<div className={styles.imgBorder}></div>
						<Image
							src={'/img/man.jpg'}
							alt='about us images'
							fill
						/>
					</article>
					<article className={styles.copy}>
						<h2>About us</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione cum,
							facilis dicta beatae deleniti saepe pariatur quas repellat,
							cupiditate dolores a sunt atque ullam sed tempora corrupti
							excepturi impedit.
							On the other hand, we denounce with righteous indignation the
							foult anuals dislike men who are so beguiled and demoralized
							by the nuhaiicharms of pleasure of the moment, so blinded by
							desire, that they cannot foresee the pain and trouble that are bound toen sue; and equal blame belongs to those who fail in their duty...
						</p>
					</article>
				</section>
			</section>
		</main>
	)
}
