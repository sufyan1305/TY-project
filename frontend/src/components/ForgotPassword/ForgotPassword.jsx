import user_logo3 from '../../assets/user_logo3.jpeg'
import { useForm } from "react-hook-form"
import axios from 'axios'

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const forgot_password = (data) => {
      
  }

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
          <form action="" method='POST' onSubmit={handleSubmit(forgot_password)}>
            <input type="text" className='focus-ring focus-ring-light'
              {...register("username")}
              placeholder='Enter your Username' />
            <br />
            <input type="tel" className='focus-ring focus-ring-light'
              style={{ width: "13.5vw" }}
              {...register("mobile_number")}
              placeholder='Enter your Mobile Number' />

            <button id='send_otp' disabled={isSubmitting} className='btn btn-light btn-sm '>
              Send OTP
            </button>
            {/* <br /> */}
            <input type="text" className='focus-ring focus-ring-light' {...register("otp")} id="otp" placeholder='Enter OTP' />
            <br />
            <button type="submit" disabled={isSubmitting} className='btn btn-light' id='submit_form'>Submit</button>
          </form>
        </div>

      </div>

    </>
  )
}
