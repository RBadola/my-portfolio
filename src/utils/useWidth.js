import { useEffect, useState } from "react"

const useWidth = () => {
    const [width, setwidth] = useState(0)
    const [height, setHeight] = useState(0)
    useEffect(()=>{
        setwidth(document.body.clientWidth)
        setHeight(document.body.clientHeight)
    },[width])
  return [width,height]
}

export default useWidth