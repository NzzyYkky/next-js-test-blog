import { useState, useRef } from 'react'

export const useAccordionAction = () => {
   const [textIsOpen, setTextIsOpen] = useState(false);

   const toggleText = () => {
      setTextIsOpen(prev => !prev)
   }

   const refText = useRef(null);

   return {
      textIsOpen,
      toggleText,
      refText
   }
}