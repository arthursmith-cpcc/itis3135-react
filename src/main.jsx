import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter, Routes, Route } from 'react-router'
import Contract from './Contract.jsx'
import Evaluations from './Evaluations.jsx'
import Survey from './Survey.jsx'
import Gallery from './Gallery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Contract" element={<Contract />}></Route>
        <Route path="/Evaluations" element={<Evaluations />}></Route>
        <Route path="/Survey" element={<Survey />}></Route>
        <Route path="/Gallery" element={<Gallery />}></Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
