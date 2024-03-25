import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from "react-redux"

function Dashboard() {
  const navigate = useNavigate()
  const [cookie, setCookie, removeCookie] = useCookies();
  const username = useSelector((state) => state.username.value);

  console.log(username);
  const logout = (e) => {
    removeCookie("token")
    e.preventDefault();
    window.localStorage.clear();
    window.location.reload();
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <h2 className='container'> {username} </h2>
      <div className="container">
        <button className="btn btn-dark" onClick={(e) => logout(e)}>Logout</button>
      </div>
    </>
  )
}

export default Dashboard
