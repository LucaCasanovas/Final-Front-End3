import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalContextProvider } from './context/Context'
import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Detail from "./pages/Detail.jsx"
import Contacts from './pages/Contacts.jsx'
import Favs from './pages/Favs.jsx'
import './App.css'

function App() {

  return (
    <React.StrictMode>
      <GlobalContextProvider>
      <BrowserRouter>
        <>
          <div>
            <Navbar/>
            <Routes>
             <Route path='/Home' element={<Home/>} />
             <Route path='/Detail/:id' element={<Detail />} />
             <Route path='/Contacts' element={<Contacts/>} />
             <Route path='/Favs' element={<Favs/>} />
            </Routes>
            <Footer/>
          </div>
        </>
      </BrowserRouter>
      </GlobalContextProvider>
    </React.StrictMode>
  )
}

export default App
