
import './App.css'

import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection.jsx/HeroSection'
import Footer from './Components/Footer/Footer'
import Cart from './Components/Cart/Cart'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import MainfilterProductpage from "./Components/FilterProducts/MainfilterProductpage"


function App() {




  
  return (
    <>
    <BrowserRouter>
      <Header/>
     
      <Routes>
        <Route path="/" element={<HeroSection/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/filter" element={<MainfilterProductpage/>} />

   
      </Routes>
      <Footer/>
    </BrowserRouter>
    

    </>
  )
}

export default App
