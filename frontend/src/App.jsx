import React from 'react'
import './App.css';
import Login from './components/Login/Login'
import CommnBg from './components/BackgroundLogin/CommnBg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import LoginForm from './components/Login/LoginForm';

function App() {
  return (
    // <Login/>
    <BrowserRouter>
    <CommnBg/>
      <Routes>
        <Route  path='/' element={<LoginForm />} >
        {/* <Route path='login' element={< />} /> */}
        <Route path='forgot' element={<ForgotPassword />} />
          </Route>
        {/* <Route path='forgot' element={<Login/>} /> */}
      </Routes>
    </BrowserRouter>
    // <CommnBg/>
  )
}

export default App

