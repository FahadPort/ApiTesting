import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Broadroutes from './BroadRoutes/Broadroutes';
import Header from './HeaderComponent/Header';
import Footer from './FooterComponent/Footer';
import Home from './Pages/Home';
import "../src/App.css"

const App = () => {
  return (
   <>
    <BrowserRouter>
    <Header/>
    <Broadroutes />
    <Footer />
    </BrowserRouter>
   </>
  )
}

export default App