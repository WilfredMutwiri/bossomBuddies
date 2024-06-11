import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Landing() {
  return (
    <div>
        <h2 className='text-center pt-5 pb-5 font-semibold text-lg'>Welcome to a family of financial support,spiritual naurishment and personal development</h2>
        <h3 className='text-center pb-5 '>We are here to enlighten and motivate</h3>
        <p className='text-center'>We are The Bossom Buddies</p>
        <div className=' w-8/12 mx-auto'>
            <img className='mx-auto w-96' src='https://i.pinimg.com/originals/df/39/2f/df392fb90619818047bf4f09e0adbc36.gif'/>
        </div>
        <Link to="/Login">
        <Button className='mx-auto w-48 mb-4 text-center' outline gradientDuoTone="purpleToPink">
            Get Started
        </Button>
        </Link>
    </div>
  )
}
