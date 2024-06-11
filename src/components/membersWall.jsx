import { Button } from 'flowbite-react'
import React from 'react'

export default function 
() {
  return (
    <div className='w-full block md:flex gap-6 bg-gray-100'>
      {/* right div */}
      <div>
      <div className=' bg-gray-400 text-white p-5 min-h-screen hidden md:flex flex-col gap-4 rounded-md flex-1'>
        <h2 className='text-lg font-semibold text-pink-700'>Bossom Buddies</h2>
        <h2 className='text-sm italic text-cyan-700'>Family Far From Home</h2>
        <hr />
        <div className=' '>
          <h2>Members <span>4</span></h2>
        </div>
        <div>
          <h2>Projects <span>0</span></h2>
        </div>
        <div>
          <h2>Activities <span>0</span></h2>
        </div>
      </div>
      <div className='hidden md:block'>
      <Button outline className='w-full' gradientDuoTone="purpleToPink">
          Logout
        </Button>
      </div>
      </div>
      {/* left div */}
      <div className='bg-gray-400 flex-1 rounded-md w-full'>
        <h2 className='text-center text-xl pt-4 font-semibold'>Welcome</h2>
        <div className='block md:grid grid-cols-3 gap-2 mt-4 w-10/12 md:w-auto mx-auto h-screen md:h-auto'>
          <div className='bg-gray-200 rounded-md ml-0 md:ml-2 p-4 mb-2 md:mb-0'>
            <h2 className='text-lg text-center p-2 text-cyan-900'>Current Members</h2>
            <hr />
            <ul className='flex flex-col gap-2 p-3'>
              <li>Dennis Mawira</li>
              <li>Exphone Kariuki</li>
              <li>Stephen Munene</li>
              <li>Wilfred Mutwiri <span className='bg-pink-600 rounded-md p-1 text-white'>Admin</span></li>
            </ul>
          </div>
          <div className='bg-gray-200 rounded-md ml-0 md:ml-2 p-4 mb-2 md:mb-0'>
          <h2 className='text-lg text-center p-2 text-cyan-900'>Monthly Contributions</h2>
          <ul className='flex flex-col gap-2 p-3'>
              <li>Dennis Mawira <span className='text-pink-700 ml-4'>Ksh : 00.00</span></li>
              <li>Exphone Kariuki <span className='text-pink-700'>Ksh : 00.00</span></li>
              <li>Stephen Munene <span className='text-pink-700'>Ksh : 00.00</span></li>
              <li>Wilfred Mutwiri <span className='text-pink-700'>Ksh : 00.00</span></li>
            </ul>
          </div>
          <div className='bg-gray-200 rounded-md ml-0 md:ml-2 mb-2 md:mb-0 p-4'>
          <h2 className='text-lg text-center p-2 text-cyan-900'>Account Balance</h2>
          <h2 className='text-2xl font-semibold text-pink-700 text-center'>Ksh : <span>7,000.00</span></h2>
          </div>
          <div  className='bg-gray-200 rounded-md mr-0 md:mr-2 p-4 mb-2 md:mb-0'>
          <h2 className='text-lg text-center p-2 text-cyan-900'>Group Assets</h2>
          <h2 >No Assents available</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
