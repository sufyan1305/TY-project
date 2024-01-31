import React from 'react'
import user_logo3 from '../../assets/user_logo3.jpeg'

export default function SetNewPassword() {
    return (
        <>
            <div className="right-inner">
                <h2 id='new_pass' className='fs-2'>
                    Set New Password
                </h2>

                <div className="user-logo mt-5">
                    <img src={user_logo3} className='img-fluid'alt="logo" />
                </div>

                <div className="formlogin">
                    <form action="" method='POST'>
                        <input type="password" className='focus-ring focus-ring-light' name="" id="" placeholder='Enter new password' />
                        <br />
                        <input type="text" className='focus-ring focus-ring-light' name="" id="" placeholder='Re-enter password' />
                        <br />
                        <br />
                        <button type="submit" id='setnewpass' className='btn btn-light btn-sm '>Change Password</button>
                    </form>
                </div>

            </div>
        </>
    )
}
