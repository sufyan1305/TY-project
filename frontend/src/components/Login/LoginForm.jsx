import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm() {
  return (
    <div>
      <div className="formlogin">
                <form action="" method='POST'>
                    <input type="text" name="" id="" placeholder='Enter your Username' />
                    <br />
                    <input type="password" name="" id="" placeholder='Enter your password' />
                    <br />
                    <div className="forgot">

                        <Link to="/login/forgot" >Forgot Password ?</Link>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
    </div>
    </div>
  )
}
