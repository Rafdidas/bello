import './App.css';
import React from "react";
import Footer from './Js/Footer';
import Header from './Js/Header';
import Main from './Js/Main';
import { Routes, Route } from 'react-router-dom';
import ShopList from './Js/ShopList';

const App = () => {

  return (
    <div id='wrapper'>
      <Header/>
        <Routes>
          <Route path='/' element={ <Main/> } exact />
          <Route path='/shop' element={ <ShopList/> } exact />
        </Routes>
      <Footer/>
    </div>
  )
  
}

export default App;
