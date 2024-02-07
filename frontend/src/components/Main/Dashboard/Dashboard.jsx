import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
function Dashboard() {
  const navigate = useNavigate()
  const [cookie, setCookie, removeCookie] = useCookies();
  const logout = (e) => {
    removeCookie("token")
    e.preventDefault();
    // Cookies.remove('token')
    // axios.post("http://localhost:8081/logout")
    //   .then(
    //     console.log("Logged out")

    //   )
    //   .catch((err) => console.log(err))

    window.localStorage.removeItem("loggedIn");
    navigate("/")
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="container">
        <button className="btn btn-dark" onClick={(e) => logout(e)}>Logout</button>
      </div>
    </>
  )
}

export default Dashboard
