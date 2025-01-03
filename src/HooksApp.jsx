import React from 'react'
import { FetchApp } from './components/FetchApp'
import {Counter} from './components/Counter'
import {FormsApp} from './components/FormsApp'


export const HooksApp = () => {
  return (
    <>
      <h1>Aplicacion de Hooks</h1>
      <hr />
      <FetchApp />
      <hr />
      <Counter/>
      <hr />
      <FormsApp/>
    </>
  )
}
