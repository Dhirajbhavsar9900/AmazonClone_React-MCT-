
import './App.css'

import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection.jsx/HeroSection'
import Footer from './Components/Footer/Footer'
import Cart from './Components/Cart/Cart'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
function App() {
 

  return (
    <>
    <BrowserRouter>
      <Header/>
     
      <Routes>
        <Route path="/" element={<HeroSection/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    

    </>
  )
}

export default App
