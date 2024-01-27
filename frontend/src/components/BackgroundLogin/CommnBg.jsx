import React, { useState } from 'react'
import logo from '../../assets/logo.jpeg'
import user_logo3 from '../../assets/user_logo3.jpeg'
import Login from '../Login/Login';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
// import { Outlet } from 'react-router-dom';



export default function CommnBg() {
    // const [name,setName] = useState("Login");


    // const changeHead = () =>{
    //     if(name === "Login"){
    //         return (<Login/>)
    //     }

    //     else if( name === "Forgot Password"){
    //         return (<ForgotPassword/>)
    //     }
    // }

    return (
        <>

            <div className="d-flex">

                <div className="container">
                    <div className="container-left">
                        <img src={logo} alt="" className="" />
                    </div>
                    <div className="line"></div>

                    <div className="container-right">
                        <div className="right-inner">
                            <h1>
                                {/* {name} */}
                                Login
                            </h1>

                            <div className="user-logo">
                                <img src={user_logo3} alt="logo" />
                            </div>

                            {/* <div className="formlogin">
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
                            </div> */}
                            {/* {changeHead()} */}
                         
                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
