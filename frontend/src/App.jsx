import React from 'react'
import './App.css';
import CommnBg from './components/BackgroundLogin/CommnBg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import LoginForm from './components/Login/LoginForm';
import SetNewPassword from './components/SetNewPassword/SetNewPassword';
import Dashboard from './components/Main/Dashboard/Dashboard';
import DemoForm from './components/DemoForm/DemoForm';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

function App() {
  const isLogin = window.localStorage.getItem("loggedIn");


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ !isLogin && <CommnBg />} >
          <Route path='' element={ !isLogin && <LoginForm />} />
          {/* <Route path='/' element= {
            <PrivateRoute>
              <CommnBg/>
            </PrivateRoute>
          }>
          <Route path='' element= {
            <PrivateRoute>
              <LoginForm/>
            </PrivateRoute>
          }/> */}
          <Route path='forgot' element={<ForgotPassword />} />
          <Route path='newpass' element={<SetNewPassword />} />
        </Route>
        <Route path='dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        
        <Route path='demo' element={<DemoForm />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

