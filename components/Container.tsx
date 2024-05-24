import { ReactNode } from 'react';
import styles from 'styles/container.module.css';

type ContainerProps = {
	children?: ReactNode;
	large?: boolean;
};

export default function Container({
	children,
	large = false,
}: ContainerProps): JSX.Element {
	return (
		<div className={large ? styles.large : styles.default}>{children}</div>
	);
}
