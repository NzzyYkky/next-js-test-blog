import { useState, useRef, MutableRefObject } from 'react';

type UseAccordionAction = () => {
	textIsOpen: boolean;
	toggleText: () => void;
	refText: MutableRefObject<HTMLDivElement | null>;
};

export const useAccordionAction: UseAccordionAction = () => {
	const [textIsOpen, setTextIsOpen] = useState(false);

	const toggleText = () => {
		setTextIsOpen((prev) => !prev);
	};

	const refText = useRef<HTMLDivElement | null>(null);

	return {
		textIsOpen,
		toggleText,
		refText,
	};
};
