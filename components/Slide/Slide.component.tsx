import Image from "next/image";
import { FC, MutableRefObject, useEffect, useRef } from "react";
import styles from './Slide.module.scss';

interface SlideProps {

}

const Slide: FC<SlideProps> = () => {


	const slideshow = useRef<HTMLDivElement | null>(null);
	const intervalSlideShow = useRef<any>(null);
	const mainContainer = useRef(null);

	const next = () => {
		console.log(slideshow.current?.children)
		if (slideshow.current && slideshow.current?.children.length > 0) {
			const firstElement = slideshow.current.children[0];
			const size = slideshow.current.children[0].clientWidth;
			console.log(size);

			slideshow.current.style.transition = `0.7s ease-out all`;

			slideshow.current.style.transform = `translateX(-${size}px)`;

			const transition = () => {
				if (slideshow.current) {
					slideshow.current.style.transition = `none`;
					slideshow.current.style.transform = `translateX(0)`;

					slideshow.current.appendChild(firstElement);

					slideshow.current.removeEventListener(
						"transitionend",
						transition
					);
				}
			};

			slideshow.current.addEventListener("transitionend", transition);
		}
	}


	const prev = () => {
		if (slideshow.current && slideshow.current.children.length > 0) {
			const index = slideshow.current.children.length - 1;
			const latElement = slideshow.current.children[index];
			slideshow.current.insertBefore(
				latElement,
				slideshow.current.firstChild
			);

			slideshow.current.style.transition = "none";

			const size = slideshow.current.children[0].clientWidth;
			slideshow.current.style.transform = `translateX(-${size}px)`;

			setTimeout(() => {
				if (slideshow.current) {
					slideshow.current.style.transition = `0.7s ease-out all`;
					slideshow.current.style.transform = `translateX(0)`;
				}
			}, 30);
		}
	};

	useEffect(() => {
		intervalSlideShow.current = setInterval(() => {
			next();
		}, 7000);

		return () => clearInterval(intervalSlideShow.current);
	}, []);

	return (
		<div className={styles.slideContainer}>
			<div className={styles.showSlide} ref={slideshow}>
				<div className={styles.slide} >
					<div className={styles.contentInfo}>
						<div className={styles.copy}>
							<h2>King Demolition</h2>
							<p>Best Solution <span> Best prices for you</span></p>
						</div>
					</div>
					<Image src={'/banners/banner1.jpg'} alt="banner" fill />
				</div>
				<div className={styles.slide} >
					<div className={styles.contentInfo}>
						<div className={styles.copy}>
							<h2>King Demolition</h2>
							<p>Our Contractors <span> Really make diffrence</span></p>
						</div>
					</div>
					<Image src={'/banners/banner2.jpg'} alt="banner" fill />
				</div>
			</div>
		</div>);
}

export default Slide;