// import { useEffect } from 'react'
import user_logo3 from '../../assets/user_logo3.jpeg'
import { useForm } from "react-hook-form"
import axios from 'axios'
// import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
// import { useCookies } from "react-cookie"
import { useSelector, useDispatch } from "react-redux"
// import { setUsername } from '../redux/username/usernameSlice'

export default function SetNewPassword() {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm()

    const username = useSelector((state) => state.username.value);
    // const dispatch = useDispatch();

    console.log(username);

    setValue('username', username);
    const navigate = useNavigate();

    const change_password = (data) => {
        console.log(data);
        axios.post("http://localhost:8081/newpass", data)
            .then((res) => {
                if (res.data.Status === "Success") {
                    navigate("/");
                    // toast("Password changed...")
                    console.log(res);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="right-inner">
                <h2 id='new_pass' className='fs-2'>
                    Set New Password
                </h2>

                <div className="user-logo mt-5">
                    <img src={user_logo3} className='img-fluid' alt="logo" />
                </div>

                <div className="formlogin">
                    <form action="" method='POST' onSubmit={handleSubmit(change_password)}>
                        <input type="password" className='focus-ring focus-ring-light' {...register("password", { minLength: { value: 3, message: "Minimum length is 3" } })} placeholder='Enter new password' />
                        <br />
                        <input type="password" className='focus-ring focus-ring-light' placeholder='Re-enter password' {...register("conpassword")} />
                        <br />
                        <br />
                        <button disabled={isSubmitting} type="submit" id='setnewpass' className='btn btn-light btn-sm '>Change Password</button>
                        {/* {isSubmitting && <Toaster />} */}
                    </form>
                </div>

            </div>
        </>
    )
}
