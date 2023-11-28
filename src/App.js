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
        <Routes>
          <Route path="/" element={<><Navbar /><HomePage /><Description /> <Cards /><Footer /></>}/>
          <Route path="def" element={<><Navbar /><Description /><Footer /></> } />
          <Route path="apis" element={<><Navbar /><Cards /><Footer /></>} />
          <Route path="perfil" element={<> <Navbar /><Profile /><Footer /></>} />
        </Routes>
      </Router>

      </div>
  );
}


export default App;