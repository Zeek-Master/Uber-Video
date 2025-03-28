import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

        const navigate = useNavigate()

        const [firstName, setfirstName] = useState('')
        const [lastName, setlastName] = useState('')
        const [email, setemail] = useState('')
        const [password, setpassword] = useState('')
        
        const [vehicleColor, setVehicleColor] = useState('')
        const [vehiclePlate, setVehiclePlate] = useState('')
        const [vehicleCapacity, setVehicleCapacity] = useState('')
        const [vehicleType, setVehicleType]= useState('')

        const {captain, setCaptain}=React.useContext(CaptainDataContext)
    
        const submitHandler = async (e)=>{
            e.preventDefault();
            const captainData={
                fullname:{
                    firstname: firstName,
                    lastname: lastName
                },
                email: email,
                password: password,
                vehicle:{
                    color: vehicleColor,
                    plate: vehiclePlate,
                    capacity: vehicleCapacity,
                    vehicleType: vehicleType
                }
            }

            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

            if (response.status === 201) {
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
            }

            setfirstName('')
            setlastName('')
            setemail('')
            setpassword('')
            setVehicleColor('')
            setVehiclePlate('')
            setVehicleCapacity('')
            setVehicleType('')
        }

return (
    <div>
            <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
            <img className='w-24 mb-2' src='../images/captainBlackLogo.png' alt='logo' />
            <form onSubmit={(e)=>{submitHandler(e)}}>

            <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
            <div className='flex gap-4 mb-2'>  
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
                    className='bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    type="email" 
                    placeholder="email@example.com" 
                    />

                    <h3 className='text-lg font-medium mb-2'>Enter password</h3>
                    <input 
                    required
                    value={password} 
                    onChange={(e) => setpassword(e.target.value)}
                    className='bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                    type="password" 
                    placeholder="password" 
                    />

                    <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
                    <div className='flex gap-4 mb-2'> 
                    <input 
                            required 
                            value={vehicleColor} 
                            onChange={(e) => setVehicleColor(e.target.value)}
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' 
                            type="text" 
                            placeholder="Vehicle Color" 
                    />

                    <input 
                            required 
                            value={vehiclePlate} 
                            onChange={(e) => setVehiclePlate(e.target.value)}
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' 
                            type="text" 
                            placeholder="Vehicle Plate" 
                    />
                    </div>

                    <div className='flex gap-4 mb-4'> 
                    <input 
                            required 
                            value={vehicleCapacity} 
                            onChange={(e) => setVehicleCapacity(e.target.value)}
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' 
                            type="number" 
                            placeholder="Vehicle Capacity" 
                    />

                    <select 
                            required 
                            value={vehicleType} 
                            onChange={(e) => setVehicleType(e.target.value)}
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                    >
                            <option value="" disabled>Vehicle Type</option>
                            <option value="car">Car</option>
                            <option value="motorcycle">Motorcycle</option>
                            <option value="auto">Auto</option>
                    </select>
                    </div>

                    <p className='text-[10px] leading-tight juxtify-center pt-3'>
                            By proceeding, you consent to get mails, incuding by automated means, from <b>RideOn</b> and its affiliates to the mail id provided above.
                    </p>

                    <button 
                    className='bg-[#111] text-white font-semibold mt-2 mb-4 rounded px-4 py-2 w-full text-lg relative transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-102'
                    >
                            Create Captain Account
                    </button>

                    <p className='text-center mb-4'>Already Have an account? <Link to='/captain-login' className='text-blue-600 relative transition duration-300 ease-in-out transform hover:text-blue-800 hover:scale-102'>Login Here</Link></p>

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