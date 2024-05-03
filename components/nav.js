import Link from 'next/link';
import styles from 'styles/nav.module.css';

export default function Nav() {
	const obj = [
		{
			url: '/',
			title: 'Home',
		},
		{
			url: '/about/',
			title: 'About',
		},
		{
			url: '/blog/',
			title: 'Blog',
		},
	];
	return (
		<nav>
			<ul className={styles.list}>
				{obj.map((item, index) => {
					return (
						<li key={index}>
							<Link href={item.url} legacyBehavior>
								<a>{item.title}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
