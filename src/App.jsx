
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
    </div>
  )
}

export default App