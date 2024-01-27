import React from 'react'
import logo from '../../assets/logo.jpeg'
import user_logo3 from '../../assets/user_logo3.jpeg'
import CommnBg from '../BackgroundLogin/CommnBg'
import { Link, BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import ForgotPassword from '../ForgotPassword/ForgotPassword'
import '../../App.css'



const Login = () => {
    return (
        <>
            {/* <div className="d-flex">

                <div className="container ">
                    <div className="container-left">
                        <img src={logo} alt="" className="" />
                    </div>
                    <div className="line"></div>
                    <div className="container-right">
                        <div className="right-inner">
                            <h1>
                                Log in
                            </h1>

                            <div className="user-logo">
                                <img src={user_logo3} alt="logo" />
                            </div>

                            <div className="formlogin">
                                <form action="" method='POST'>
                                    <input type="text" name="" id="" placeholder='Enter your Username' />
                                    <br />
                                    <input type="password" name="" id="" placeholder='Enter your password' />
                                    <br />
                                    <div className="forgot">

                                        <a href="">Forgot Password ?</a>
                                    </div>
                                    <br />
                                    <button type="submit">Submit</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}
 <CommnBg />
            {/* <div className="formlogin">
                <form action="" method='POST'>
                    <input type="text" name="" id="" placeholder='Enter your Username' />
                    <br />
                    <input type="password" name="" id="" placeholder='Enter your password' />
                    <br />
                    <div className="forgot">

                        <Link to="/forgot" >Forgot Password ?</Link>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form> */}
                <Outlet/>
            {/* </div> */}

            



        </>
    )
}

export default Login
