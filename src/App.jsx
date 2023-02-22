import React, { useEffect, useState } from 'react';
import MyRouter from './components/ui/MyRouter';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import './App.css';
import { UserContext } from './context/UserContext';
import AuthRouter from './components/ui/AuthRouter';
import { decodeToken } from 'react-jwt';

const App = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    setUser(decodeToken(localStorage.getItem('Authorization')))
    console.log(user)
  }, [])

  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Header />
          {
            localStorage.getItem('Authorization') !== null ?
            <MyRouter/>
            :
            <AuthRouter/>
          }
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;