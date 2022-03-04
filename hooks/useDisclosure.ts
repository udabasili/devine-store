import { useCallback, useState } from "react"

const useDisclosure = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    const close = useCallback(() => setIsOpen(false), [])
    const open = useCallback(() => setIsOpen(true), [])
    const toggle = useCallback(() => setIsOpen((state) => !state), []);

    return {
        isOpen,
        close,
        open,
        toggle
    }
}

export default useDisclosure

