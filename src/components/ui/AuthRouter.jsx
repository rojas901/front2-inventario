import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../auth/Login'
import Register from '../auth/Register'
import Home from './Home'
import NotFound from './NotFound'

const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Register />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default AuthRouter