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
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
