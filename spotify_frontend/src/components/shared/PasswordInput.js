import React from 'react'

function PasswordInput({label, placeholder}) {
  return (
    <div className='flex flex-col space-y-2 w-full'>
    <label for={label} className='font-semibold'>{label}</label>
    <input type='password' placeholder={placeholder} className='p-2 border border-gray-400 border-solid rounded placeholder-gray-500'
    id={label}></input>
    </div>
  )
}

export default PasswordInput