import { useEffect, useState } from "react"

const useWidth = () => {
    const [width, setwidth] = useState(0)
    useEffect(()=>{
        setwidth(window.innerWidth)
    },[width])
  return width
}

export default useWidth