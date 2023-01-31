'use client'
import styles from './BreadCrumb.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const BreadCrumb = () => {
	const path = usePathname();
	console.log(path);
	return (<div className={styles.bread}>
		<ol>
			<li>{<Link href={'/'}>home</Link>}</li>
			<li>{`${path}`}</li>
		</ol>
	</div>);
}

export default BreadCrumb;