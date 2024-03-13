import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import user_logo3 from '../../assets/user_logo3.jpeg'
import { useForm } from "react-hook-form"

export default function LoginForm() {
    // const [data, setdata] = React.useState({
    //     username: "",
    //     password: ""
    // });
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()


    const [iswrong, setWrong] = useState(false)
    //const [auth, setauth] = React.useState(false)
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

    // const login = (e) => {
    //     e.preventDefault();
    //     axios.post("http://localhost:8081/", data)
    //     .then((res) => {
    //         if (res.data.Status === "Success") {
    //                 window.localStorage.setItem("loggedIn", true)
    //                 setWrong(false)
    //                 navigate('/dashboard')
    //             }
    //             else {
                    // alert(res.data.Error)
    //                 toast.error("Invalid credentials...")
    //                 setWrong(true)
    //             }
    //         })
    //         .catch((err) => console.log(err))
    // }

    const login = (data) => {
        axios.post("http://localhost:8081/", data)
            .then((res) => {
                if (res.data.Status === "Success") {
                    window.localStorage.setItem("loggedIn", true)
                    setWrong(false)
                    navigate('/dashboard')
                }
                else {
                    // alert(res.data.Error)
                    toast.error("Invalid credentials...")
                    setWrong(true)
                }
            })
            .catch((err) => console.log(err))
    }

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

                    <form action="" method='POST' onSubmit={handleSubmit(login)} >
                        <input className='focus-ring focus-ring-light' type="text" placeholder='Enter your Username'
                        {...register("username")}  />
                        <br />
                        <input type="password" className='focus-ring focus-ring-light' name="password" placeholder='Enter your password'
                           {...register("password")}  />
                        <br />
                        <div className="forgot">
                            <Link to="/forgot" className='frgt' >Forgot Password ?</Link>
                        </div>
                        <br />
                        <button disabled={isSubmitting}type="submit" className='btn btn-light'>Submit</button>
                        <Toaster />
                    </form>
                </div>
            </div>
        </>
    )
}
