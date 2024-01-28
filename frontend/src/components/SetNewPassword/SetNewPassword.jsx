import React from 'react'
import user_logo3 from '../../assets/user_logo3.jpeg'

export default function SetNewPassword() {
    return (
        <>
            <div className="right-inner">
                <h2 id='new_pass'>
                    Set New Password
                </h2>

                <div className="user-logo">
                    <img src={user_logo3} alt="logo" />
                </div>

                <div className="formlogin">
                    <form action="" method='POST'>
                        <input type="password" name="" id="" placeholder='Enter new password' />
                        <br />
                        <input type="text" name="" id="" placeholder='Re-enter password' />
                        <br />
            
                        <br />
                        <button type="submit" id='setnewpass'>Change Password</button>
                    </form>
                </div>

            </div>
        </>
    )
}
