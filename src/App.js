import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter desde react-router-dom

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Description from './components/Description';
import Cards from './components/Cards';
import Profile from './perfil/Profile';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <HomePage />
        <Description />
        <Cards />
      </div>
    </BrowserRouter>
  );
}


export default App;