import React from 'react';
import MyRouter from './components/ui/MyRouter';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/ui/Header';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <MyRouter/>
      </BrowserRouter>
    </>
  );
}

export default App;