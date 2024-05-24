import { useState } from 'react';

type UseHamburgerToggle = () => {
	navIsOpen: boolean;
	closeNav: () => void;
	toggleNav: () => void;
};

export const useHamburgerToggle: UseHamburgerToggle = () => {
	const [navIsOpen, setNavIsOpen] = useState(false);

	const toggleNav = () => {
		setNavIsOpen((prev) => !prev);
	};

	const closeNav = () => {
		setNavIsOpen(false);
	};

	return {
		navIsOpen,
		closeNav,
		toggleNav,
	};
};
