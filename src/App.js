import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./Header"


function App() {

  return (
    <>
      <BrowserRouter>
         
        <Header/>
         
      </BrowserRouter>
    </>
  );
} export default App;