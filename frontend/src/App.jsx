// import React from 'react'
import './App.css';
import CommnBg from './components/BackgroundLogin/CommnBg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import LoginForm from './components/Login/LoginForm';
import SetNewPassword from './components/SetNewPassword/SetNewPassword';
import Dashboard from './components/Main/Dashboard/Dashboard';
import DemoForm from './components/DemoForm/DemoForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddUser from './components/Main/ManageUsers/AddUser';
import AddWarehouse from './components/Main/ManageWarehouse/AddWarehouse'

function App() {
  const isLogin = window.localStorage.getItem("loggedIn");
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isLogin ? <Dashboard /> : <CommnBg />} >
          <Route path='' element={isLogin ? <Dashboard /> : <LoginForm />} />
          <Route path='forgot' element={<ForgotPassword />} />
          <Route path='newpass' element={<SetNewPassword />} />
        </Route>
        <Route path='dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path='demo' element={<DemoForm />} />
        <Route path='add-user' element={<AddUser />} />
        <Route path='add-warehouse' element={<AddWarehouse />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App