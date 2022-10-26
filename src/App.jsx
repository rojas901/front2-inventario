import React from 'react';
import MyRouter from './components/ui/MyRouter';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <MyRouter/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;