'use client'
import Image from 'next/image';
import styles from './Banner.module.scss';
import { useRouter } from 'next/navigation'


const Banner = () => {

	const router = useRouter();



	return (
		<div className={styles.banner}>
			<div className={styles.contentInfo}>
				<div className={styles.copy}>
					<h2>King Demolition</h2>
					<p>Best Solution <span> Best prices for you</span></p>
				</div>
			</div>
			<Image
				src={'/banners/banner1.jpg'}
				alt="banners"
				fill
			/>
		</div>
	);
}

export default Banner;