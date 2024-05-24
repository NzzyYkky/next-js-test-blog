import styles from 'styles/accordion.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useAccordionAction } from 'hooks/useAccordionAction';
import { ReactNode } from 'react';

type AccordionProps = {
	heading?: string;
	children?: ReactNode;
};

export default function Accordion({
	heading,
	children,
}: AccordionProps): JSX.Element {
	const { textIsOpen, toggleText, refText } = useAccordionAction();

	return (
		<div className={textIsOpen ? styles.open : styles.close}>
			<h3 className={styles.heading}>
				<button onClick={toggleText}>
					{heading}
					<FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
				</button>
			</h3>
			<div
				className={styles.text}
				ref={refText}
				style={{
					['--text-height' as string]: refText.current
						? `${refText.current.scrollHeight}px`
						: '0px',
				}}
			>
				<div className={styles.textInner}>{children}</div>
			</div>
		</div>
	);
}
