import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from "./footer"
import Navbar from './Navbar';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Contact from './Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    <Footer/>
  </Router>
);
