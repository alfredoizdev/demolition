"use client"

import { useRouter } from "next/navigation";
import { FC } from "react";
import styles from './Button.module.scss';

interface ButtonProps {
	text: string;
	color: 'primary' | 'secondary',
	goTo: string;
}

const Button: FC<ButtonProps> = ({ text, color, goTo }) => {

	const router = useRouter();

	const handleOnClick = () => {
		router.push(goTo)
	}

	return (<>
		<button
			onClick={handleOnClick}
			type="button"
			className={`${styles.button} ${color === 'primary' ? styles.primary : styles.secondary}`}>
			{text}
		</button>
	</>);
}

export default Button;