'use client';
import React, { useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
const SignupPage = () => {
  const router = useRouter();
  const [user,setUser] = React.useState({
    email:"",
    username:"",
    password:""
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading,setLoading] = React.useState(false);
  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup",user);
      console.log("Signup Success ", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed ",error.message);
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  }
  useEffect(() => {
    if(user.email.length >0 && user.username.length > 0 && user.password.length >0 )
    {
      setButtonDisabled(false);
    }else
    {
      setButtonDisabled(true);
    }
  },[user]);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>{loading ? "Processing":"Signup"}</h1>
      <hr/>
        <label htmlFor="username">Username</label>
        <input id="username" 
          className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
          type='text' 
          value={user.username}
          onChange={(e)=> setUser({...user,username:e.target.value})}
        />
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
        onClick={onSignup}
        className='p-2 border border-gray-300 rounded-lg mb-4 
        focus:outline-none focus:border-gray-600'>
          {buttonDisabled ? "No signup":"Signup"}
        </button>
        <Link href={"/login"}>To login</Link>
    </div>
  )
}

export default SignupPage