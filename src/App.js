
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {getData} from './Server';
import Navbar from './components/navbar/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Gallery from './components/Pages/Gallery';
import Footer from './components/footer/Footer';


async function getDataFromServer(){
  const res = await getData();
  return res;
}

function App() {
  getDataFromServer().then(function(result) {
    console.log(result) // "Some User token"
 });
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/gallery' element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;