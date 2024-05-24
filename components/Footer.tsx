import styles from 'styles/footer.module.css';
import Logo from './Logo';
import Social from 'components/social';
import Container from 'components/container';

export default function Footer(): JSX.Element {
	return (
		<footer className={styles.wrapper}>
			<Container>
				<div className={styles.flexContainer}>
					<Logo />
					<Social />
				</div>
			</Container>
		</footer>
	);
}
