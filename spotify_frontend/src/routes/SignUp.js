import React from 'react'
import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import {Link} from 'react-router-dom';

function SignUp() {
  return (
    <div className='w-full h-full flex flex-col items-center'>
        <div className='p-5 border-b border-solid border-gray-400 w-full flex justify-center'>
        <Icon icon="logos:spotify" width="150"/>
        </div>
        <div className='w-1/3 py- flex items-center justify-center flex-col'>
        <div className='font-bold mb-4 text-2xl'>Sign up for free to start listening.</div>
            <TextInput label="email Address" placeholder="email Address"></TextInput>
            <TextInput label="Confirm email Adress" placeholder="Confirm email Adress"></TextInput>
            <PasswordInput className="mb-6" label="Create Password" placeholder="Enter Password"></PasswordInput>
            <TextInput label="What should we call you?" placeholder="Enter a Profile name"></TextInput>
            <div className='w-full flex items-center justify-center my-8'>
            <button className='bg-green-300 font-semibold p-3 px-10 rounded-full'>Sign Up</button>
            </div>
            <div className='w-full border-b border-solid border-gray-400 '>
            </div>
            <div className='my-6 semi-bold text-lg'>
              Already have an accout?
            </div>
            <div className='border border-gray-400 text-gray-400 w-full flex items-start justify-center py-4 rounded-full font-bold'>
              <Link to="/login">
              LOG IN INSTEAD
              </Link>
            </div>
        </div>
    </div>
  )
}

export default SignUp