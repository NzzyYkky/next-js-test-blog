import { ReactNode } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

type LayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
