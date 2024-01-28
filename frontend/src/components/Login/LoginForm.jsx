import React from 'react'
import { Link } from 'react-router-dom'
import user_logo3 from '../../assets/user_logo3.jpeg'


export default function LoginForm() {
    return (
        <>
            <div className="right-inner">
                <h1>
                    Login
                </h1>

                <div className="user-logo">
                    <img src={user_logo3} alt="logo" />
                </div>

                <div className="formlogin">
                    <form action="" method='POST'>
                        <input type="text" name="username" id="" placeholder='Enter your Username' />
                        <br />
                        <input type="password" name="password" id="" placeholder='Enter your password' />
                        <br />
                        <div className="forgot">

                            <Link to="/forgot" >Forgot Password ?</Link>
                        </div>
                        <br />
                        <button type="submit" onClick={(e)=> e.preventDefault()}>Submit</button>
                    </form>
                </div>

            </div>

        </>
    )
}
