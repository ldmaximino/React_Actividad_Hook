import { useState } from "react"
import { useCount } from "../hooks/useCount"

export const Counter = ({name}) => {
    const { count,sumar,restar,resetear} = useCount(); //estoy recibiendo las variables del hook useCount.js

  return (
    <div>
        <p>Contador {name}: {count}</p>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={resetear}>Reset</button>
    </div>
  )
}
