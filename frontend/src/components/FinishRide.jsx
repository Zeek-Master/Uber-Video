import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
               props.setfinishRidePanel(false) 
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-3xl font-semibold ml-3 mb-5'>Finish ride</h3>
        <div className='flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg mt-4'>
            <div className='flex items-center gap-3'>
                <img className='h-15 w-15 rounded-full object-cover' src="https://i.redd.it/mibglviklubb1.jpg" alt="" />
                <h2 className='text-xl font-medium'>Ariza Patel</h2>
            </div>
            <h5 className='text-lg font-semibold'>Reached</h5>
        </div>
        <div className='flex flex-col gap-2 justify-between items-center'>
            <div className='w-full mt-3 '>
                <div className='flex iems-center gap-5 p-3 border-b-2 border-gray-200'>
                    <i className="text-xl mt-2 ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Jasola Vihar, New Delhi, Delhi</p>
                    </div>

                </div>
                <div className='flex iems-center gap-5 p-3 border-b-2 border-gray-200'>
                    <i className="text-xl mt-2 ri-map-pin-user-fill"></i> 
                    <div>
                        <h3 className='text-lg font-medium'>Amity University, Gate Number 2</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Sector 125, Noida, Uttar Pradesh</p>
                    </div>

                </div>
                <div className='flex iems-center gap-5 p-3'>
                    <i className="text-xl mt-2 ri-cash-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹ 193.20</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                    </div>
                </div>
            </div>
            <div className='mt-6 w-full'> 
                <p className='text-red-500 mb-4 ml-4 text-xs '>Click on finish ride button if you have collected the payment</p>   
                <Link to='/captain-home' className='w-full mt-5 flex text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg transition duration-300 ease-in-out transform hover:bg-green-800 '>Finish Ride
                </Link> 
                    
            </div>
        </div>
    </div>
  )
}

export default FinishRide