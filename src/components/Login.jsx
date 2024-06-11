import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'

export default function Login() {
  return (
    <div className='pt-10 bg-gray-100 min-h-screen'>
        <div className='w-10/12 block md:flex mx-auto gap-6 pt-5 md:pt-14'>
            <div className='flex-1'>
            <div>
            <h2 className='text-3xl font-semibold text-pink-700'>Bossom Buddies</h2>
            <p className='text-sm italic pt-2 text-cyan-900'>Family Far From Home</p>
            </div>
            <p className='pt-4 leading-relaxed'>
                Welcome to a family that focuses on compassion, support and spiritual naurishment.
                A family that beleives in God and the achievement of goals through moral, emotional,spiritual and financial support. 
                Login with your username,email and password and be part of this great family!
            </p>
            </div>
            <div className='flex-1 mt-8 md:mt-0'>
                <form className='flex flex-col gap-3'>
                    <Label value="Username"/>
                    <TextInput type='text' placeholder='Your userName' id='userName'/>
                    <Label value='Email'/>
                    <TextInput type='email' placeholder='Your email' id='email'/>
                    <Label value='Password'/>
                    <TextInput type='password' placeholder='******' id='password'/>
                    <Button gradientDuoTone='purpleToPink' outline>
                        <a href='/membersWall'>
                        Login
                        </a>
                        </Button>
                </form>
                    <p className='text-sm pt-4'>
                        Don't have an account? <a className='text-cyan-800' href='#'>Create account</a>
                    </p>
            </div>
        </div>
        <div></div>
    </div>
  )
}
