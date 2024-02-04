import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import user_logo3 from '../../assets/user_logo3.jpeg'


export default function LoginForm() {
    const [data, setdata] = React.useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate()

    const login = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8081/", data)
            .then((res) => {
                if (res.data.Status === "Success") {
                    navigate('/dashboard')
                }
                else {
                    alert(res.data.Error)
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
                    <form action="" method='POST' onSubmit={login}>
                        <input className='focus-ring focus-ring-light' type="text" name="username" id="" placeholder='Enter your Username'
                            onChange={e => setdata({ ...data, username: e.target.value })} />
                        <br />
                        <input type="password" className='focus-ring focus-ring-light' name="password" id="" placeholder='Enter your password'
                            onChange={e => setdata({ ...data, password: e.target.value })} />
                        <br />
                        <div className="forgot">
                            <Link to="/forgot" className='frgt' >Forgot Password ?</Link>
                        </div>
                        <br />
                        <button type="submit" className='btn btn-light' >Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
