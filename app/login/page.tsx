'use client';
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
const LoginPage = () => {
  const router = useRouter();
  const [loading,setLoading] = React.useState(false);
  const [user,setUser] = React.useState({
    email:"",
    password:""
  });
  const onLogin = async () => {
       try {
         setLoading(true);
         const response =  await axios.post("/api/users/login",user);
         console.log("Signup Success ", response.data);
         toast.success("Login Success");
         router.push("/profile");
       } catch (error:any) {
          console.log("Login failed ",error.message);
          toast.error(error.message);
       }finally{
          setLoading(false);
       }
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Login</h1>
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
        className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'>{loading ? "Processing":"Login"}</button>
        <Link href={"/signup"}>To signup</Link>
    </div>
  )
}

export default LoginPage