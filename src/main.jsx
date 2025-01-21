import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Component/Navbar.jsx'
import CreateFormReport from './Component/CreateFormReport.jsx'
import Home from './Component/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    {/* <App/>
    <Home/>
    <CreateFormReport/> */}
  </StrictMode>,
)
