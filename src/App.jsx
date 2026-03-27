import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <title>Arthur Smith's Ancient Sabertooth | ITIS3135 | Home</title>
      <Header></Header>
      <main>
        <h2>Home</h2>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App
