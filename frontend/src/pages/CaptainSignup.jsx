import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CaptainSignup = () => {
        const [firstName, setfirstName] = useState('')
        const [lastName, setlastName] = useState('')
        const [email, setemail] = useState('')
        const [password, setpassword] = useState('')
        const [userData, setuserData] = useState({})
    
        const submitHandler =(e)=>{
            e.preventDefault();
            setuserData({
                fullName:{
                    firstName: firstName,
                    lastName: lastName
                },
                email: email,
                password: password
            })
            setfirstName('')
            setlastName('')
            setemail('')
            setpassword('')
        }

  return (
    <div>
        <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-24 mb-10' src='../images/captainBlackLogo.png' alt='logo' />
        <form onSubmit={(e)=>{submitHandler(e)}}>

        <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
        <div className='flex gap-4 mb-5'>  
        <input 
            required 
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
            type="text" 
            placeholder="First Name"
            value={firstName} 
            onChange={(e) => setfirstName(e.target.value)}
            />
            <input 
            required 
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
            type="text" 
            placeholder="Last Name" 
            value={lastName} 
            onChange={(e) => setlastName(e.target.value)}
            />
        </div>

            <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
            <input 
            required 
            value={email} 
            onChange={(e) => setemail(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            placeholder="email@example.com" 
            />

            <h3 className='text-lg font-medium mb-2'>Enter password</h3>
            <input 
            required
            value={password} 
            onChange={(e) => setpassword(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
            type="password" 
            placeholder="password" 
            />

            <p className='text-[10px] leading-tight juxtify-center'>
                By proceeding, you consent to get mails, incuding by automated means, from <b>RideOn</b> and its affiliates to the mail id provided above.
            </p>

            <button 
            className='bg-[#111] text-white font-semibold mt-2 mb-2 rounded px-4 py-2 w-full text-lg relative transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-102'
            >
                Login
            </button>

            <p className='text-center'>Already Have an account? <Link to='/captain-login' className='text-blue-600 relative transition duration-300 ease-in-out transform hover:text-blue-800 hover:scale-102'>Login Here</Link></p>

        </form>
        </div>
        <div>
            <p className='text-[10px] leading-tight juxtify-center'>
                This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply.
            </p>
        </div>
    </div>
    </div>
  )
}

export default CaptainSignup