import { useRef, useState, useEffect } from "react"

function App() {

    const ref = useRef(null)
  
  
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  
    useEffect(() => {
  
      const checkIfClickedOutside = e => {
  
        // If the menu is open and the clicked target is not within the menu,
  
        // then close the menu
  
        if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
            console.log(ref.current)
          setIsMenuOpen(false)
  
        }
  
      }
  
  
      document.addEventListener("click", checkIfClickedOutside)
  
  
      return () => {
  
        // Cleanup the event listener
  
        document.removeEventListener("click", checkIfClickedOutside)
  
      }
  
    }, [isMenuOpen])

}