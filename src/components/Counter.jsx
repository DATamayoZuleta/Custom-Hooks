import React from 'react'
import { useCounter } from '../Hooks/useCounter'

export const Counter = () => {

  const {counter, increment, decrement, reset} = useCounter(0)

  return (
    <>
    <h1>Contador</h1>
    <h4>{counter}</h4>
    <button  className="btn btn-primary" onClick={() => increment()}>Aumentar</button>
    <button  className="btn btn-danger" onClick={() => decrement()}>Decrementar</button>
    <button  className="btn btn-secondary" onClick={() => reset()}>Reset</button>
    </>
  )
}
