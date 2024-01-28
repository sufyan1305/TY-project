import React from 'react'
import './App.css';
import CommnBg from './components/BackgroundLogin/CommnBg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import LoginForm from './components/Login/LoginForm';
import SetNewPassword from './components/SetNewPassword/SetNewPassword';

function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<CommnBg />} >
          <Route path='' element={<LoginForm />} />
          <Route path='forgot' element={<ForgotPassword />} />
          <Route path='newpass' element={<SetNewPassword />} />
        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App

