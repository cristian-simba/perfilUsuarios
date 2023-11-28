// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import {Navigate, Outlet} from 'react-router-dom';


import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Description from './components/Description';
import Cards from './components/Cards';
import Profile from './perfil/Profile';
import Footer from './components/Footer';

function App() {
  return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<><HomePage /><Description /><Cards /><Footer /></>}/>
            <Route path="/home/def" element={<><Description /><Footer /></>} />
            <Route path="/home/apis" element={<><Cards /><Footer /></>} />
            <Route path="/perfil" element={<><Profile /><Footer /></>} />
          </Routes>
        </Router>
      </div>
  );
}


export default App;