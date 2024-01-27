import React from 'react'
import CommnBg from '../BackgroundLogin/CommnBg'
import { Outlet } from 'react-router-dom'

export default function ForgotPassword() {
  return (
    <>


           <div className="formlogin">
                                <form action="" method='POST'>
                                    <input type="text" name="" id="" placeholder='Enter your Username' />
                                    <br />
                                    <input type="password" name="" id="" placeholder='Enter your password' />
                                    <br />
                                    <div className="forgot">

                                    
                                    </div>
                                    <br />
                                    <button type="submit">Submit</button>
                                </form>
                            {/* <Outlet/> */}
                            </div>
                            {/* <h1>Hello World</h1> */}
    </>
  )
}
