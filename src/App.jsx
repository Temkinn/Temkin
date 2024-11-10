import { useEffect } from 'react'
import './App.css'
import Component from './components/component'
const tg = window.Telegram.WebApp

function App() {
  useEffect(() => {
    tg.ready()
  },[])

  return (
    <div className='main'>
      <Component name="зеленый" />
      <Component name="красный" />
      <Component name="синий" />
      <Component name="салатовый" />

      <Component name="зеленый" />
      <Component name="красный" />
      <Component name="синий" />
      <Component name="салатовый" />
      
      <Component name="зеленый" />
      <Component name="красный" />
      <Component name="синий" />
      <Component name="салатовый" />
    </div>
  )
}

export default App
