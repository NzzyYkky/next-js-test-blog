import { useState } from 'react'

export const useHamburgerToggle = () => {
   const [navIsOpen, setNavIsOpen] = useState(false)

   const toggleNav = () => {
      setNavIsOpen(prev => !prev)
   }

   const closeNav = () => {
      setNavIsOpen(false)
   }

   return {
      navIsOpen,
      closeNav,
      toggleNav
   }
}