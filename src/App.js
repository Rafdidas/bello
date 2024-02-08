import './App.css';
import React from "react";
import Footer from './Js/Footer';
import Header from './Js/Header';
import Main from './Js/Main';
import { Routes, Route } from 'react-router-dom';
import ShopList from './Js/ShopList';
import Detail from './Js/Detail';

const App = () => {

  return (
    <div id='wrapper'>
      <Header/>
      <Routes>
        <Route path='/*' element={
          <Routes>
            <Route path='/' element={ <Main/> } exact />
            {/* <Route path='/detail/:id/' element={<Detail />} /> */}
            <Route path='/detail/:id' element={ <Detail/> } />
          </Routes>
        } />
        <Route path='shop/*' element={
          <Routes>
            <Route path='/' element={ <ShopList/> } />
            <Route path='/detail/:id' element={ <Detail/> } />
          </Routes>
        } />
      </Routes>
      <Footer/>
    </div>
  )
  
}

export default App;
