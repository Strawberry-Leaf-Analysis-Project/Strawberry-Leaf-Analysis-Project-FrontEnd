import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import Nav from'./navigation/Nav'
function App() {
  return (
    <BrowserRouter>

      <Nav />

    </BrowserRouter>
  );
}

export default App;
