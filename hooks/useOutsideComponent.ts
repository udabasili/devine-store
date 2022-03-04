import { Context } from "@/context/appContext"
import { useCallback, useContext, useEffect, useRef, useState } from "react"
import useDisclosure from "./useDisclosure"

const useOutsideComponent = () => {

    const ref = useRef(null)
    const { close, isOpen } = useDisclosure()
    const {setShowDropDown, showDropDown}  = useContext(Context)

    
    useEffect(() => {
        const cart = document.getElementById("cart");

      const checkIfClickedOutside = (e: any) => {
        //check if the current element is not a descendant of cart
        if (showDropDown && ref.current && !cart?.contains(e.target)) {
        
            setShowDropDown(false)
        }
  
      }
  
  
      document.addEventListener("click", checkIfClickedOutside)
  
  
      return () => {
  
        // Cleanup the event listener
  
        document.removeEventListener("click", checkIfClickedOutside)
  
      }
  
    }, [showDropDown])

    return {
        ref
    }

}

export default useOutsideComponent