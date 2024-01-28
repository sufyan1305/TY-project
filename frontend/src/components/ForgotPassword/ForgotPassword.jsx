import React from 'react'
import user_logo3 from '../../assets/user_logo3.jpeg'


export default function ForgotPassword() {
  return (
    <>

      <div className="right-inner">
        <h1>
          Forgot Password
        </h1>

        <div className="user-logo">
          <img src={user_logo3} alt="logo" />
        </div>

        <div className="formlogin">
          <form action="" method='POST'>
            <input type="text" name="" id="" placeholder='Enter your Username' />
            <br />
            <input type="password" name="" id="" placeholder='Enter your Mobile Number' />
            <br />
            <input type="text" name="" id="otp"  placeholder='Enter OTP'/>
            <button id='send_otp'>
              Send OTP
            </button>
            <br />
            <button type="submit" id='submit_form'>Submit</button>
          </form>
        </div>

      </div>

    </>
  )
}
