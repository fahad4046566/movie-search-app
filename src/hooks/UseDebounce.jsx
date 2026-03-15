import { useState,useEffect } from "react"

const UseDebounce = (value,delay = 500) => {
    const [debounced, setdebounced] = useState(value)
 
   useEffect(() => {
     const handler = setTimeout(() => {
        setdebounced(value)
     },delay);
     return ()=>{
        clearTimeout(handler)
     }
   }, [value,delay])
   return debounced
}

export default UseDebounce