import Logo from 'components/Logo';
import Nav from 'components/Nav';
import styles from 'styles/header.module.css';
import Container from 'components/Container';

export default function Header(): JSX.Element {
	return (
		<header>
			<Container large>
				<div className={styles.flexContainer}>
					<Logo boxOn />
					<Nav />
				</div>
			</Container>
		</header>
	);
}
