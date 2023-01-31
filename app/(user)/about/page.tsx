import styles from './about.module.scss';
import Image from 'next/image';
import BreadCrumb from '@/components/ui/BreadCrumb/BreadCrumb.componet';


const AboutPage = () => {
	return (
		<section className={`container ${styles.aboutContainer}`}>
			<BreadCrumb />
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
		</section>);
}

export default AboutPage;