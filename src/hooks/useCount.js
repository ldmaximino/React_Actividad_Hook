import { useState } from "react";

export const useCount = () => {
    const [count, setCount] = useState(0);

    const sumar = () => setCount(count + 1);
    const restar = () => count > 0 && setCount(count - 1);   
    const resetear = () => setCount(0);
    
  return (
    {count,sumar,restar,resetear}
  )
}
