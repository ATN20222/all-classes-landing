import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Responsive.css'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import HowItWorks from './Pages/HowItWorks/HowItWorks';
function App() {
  useEffect(()=>{
    AOS.init({
        
        duration: 1000, 
      });
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/Contactus' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/howitworks' element={<HowItWorks />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
