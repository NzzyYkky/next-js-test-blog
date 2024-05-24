import Link from 'next/link';
import styles from 'styles/logo.module.css';

type LogoProps = {
	boxOn?: boolean;
};

export default function Logo({ boxOn = false }: LogoProps): JSX.Element {
	return (
		<div>
			<Link href="/" legacyBehavior>
				<a className={boxOn ? styles.box : styles.basic}>CUBE</a>
			</Link>
		</div>
	);
}
