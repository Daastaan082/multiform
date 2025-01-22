import { StrictMode } from 'react'
import {ReactDOM ,createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import CreateFormReport from './Pages/CreateFormReport'
import Navbar from './Component/Navbar'
import MyPdf from './Component/MyPdf'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MyPdf/>
  </BrowserRouter>
)
