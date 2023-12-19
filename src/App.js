import './App.css';
import React from "react";
import Footer from './Js/Footer';
import Header from './Js/Header';
import Main from './Js/Main';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <div id='wrapper'>
      <Header/>
        <Routes>
          <Route path='/' element={ <Main/> } exact />
        </Routes>
      <Footer/>
    </div>
  )
  
}

export default App;
