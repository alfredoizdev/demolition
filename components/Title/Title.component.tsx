import { FC } from "react";
import styles from './Title.module.scss';

interface TitleProps {
	text: string;
	type?: 'h3' | 'h2' | 'h1'
}

const Title: FC<TitleProps> = ({ text, type = 'h2' }) => {
	return (<div className={styles.titleContainer}>
		{type === 'h2' && <h2>{text}</h2>}
		{type === 'h3' && <h3>{text}</h3>}
		{type === 'h1' && <h1>{text}</h1>}
	</div>);
}

export default Title;