import React, { useEffect, useRef } from "react";
import useWidth from "../utils/useWidth";

const Bg = () => {
  const [width,height] = useWidth();
  const w = Math.floor(width / 50);
  const h = Math.floor(height / 50);
 
  return (
<></>
  );
};

export default Bg;
