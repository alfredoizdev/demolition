import styles from './services.module.scss';
import BreadCrumb from '@/components/ui/BreadCrumb/BreadCrumb.componet';
import { BsFillMegaphoneFill } from "react-icons/bs";
import Title from '@/components/Title/Title.component';


const ServicesPage = () => {
	return (
		<section className={`container ${styles.serviceContainer}`}>
			<BreadCrumb />
			<section>
				<article className={styles.service}>
					<Title text={`Demolition`} type="h2" />
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
				<article className={styles.service}>
					<Title text={`Cleaning`} type="h2" />
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
				<article className={styles.service}>
					<Title text={`Pick Up`} type="h2" />
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

export default ServicesPage;