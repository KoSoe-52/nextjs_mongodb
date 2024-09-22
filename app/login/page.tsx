'use client';
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
const LoginPage = () => {
  const [user,setUser] = React.useState({
    email:"",
    password:""
  });
  const onLogin = () => {

  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>SignUp</h1>
      <hr/>
        
        <label htmlFor="email">Email</label>
        <input id="email" 
          className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
          type='text' 
          value={user.email}
          onChange={(e)=> setUser({...user,email:e.target.value})}
        />
        <label htmlFor="password">Password</label>
        <input id="password" 
          className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
          type='text' 
          value={user.password}
          onChange={(e)=> setUser({...user,password:e.target.value})}
        />
        <button 
        onClick={onLogin}
        className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'>SignUp</button>
        <Link href={"/signup"}>To signup</Link>
    </div>
  )
}

export default LoginPage