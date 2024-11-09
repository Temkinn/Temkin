import { useEffect } from 'react'
import './App.css'
const tg = window.Telegram.WebApp

function App() {
  useEffect(() => {
    tg.ready()
  },[])

  return (
    <>
      Я люблю тебя
    </>
  )
}

export default App
