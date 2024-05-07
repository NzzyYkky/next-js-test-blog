import Link from 'next/link';
import { useState } from 'react';
import styles from 'styles/nav.module.css';

export default function Nav() {
	const [navIsOpen, setNavIsOpen] = useState(false)

	const toggleNav = () => {
		setNavIsOpen(prev => !prev)
	}

	const closeNav = () => {
		setNavIsOpen(false)
	}

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
		<nav className={navIsOpen ? styles.open : styles.close}>
			{navIsOpen && (
				<style jsx global>
					{
						`
							@media (max-width: 767px) {
								body {
									overflow: clip;
									position: fixed;
									width: 100%;
								}
							}
						`
					}
				</style>
			)}

			<button className={styles.btn} onClick={toggleNav}>
				<span className={styles.bar}></span>
				<span className='sr-only'>MENU</span>
			</button>
			<ul className={styles.list}>
				{obj.map((item, index) => {
					return (
						<li key={index}>
							<Link href={item.url} legacyBehavior>
								<a onClick={closeNav}>{item.title}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
