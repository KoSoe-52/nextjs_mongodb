'use client';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const ProfilePage = () => {
  const router = useRouter();
  const logout = async () =>{
     try {
        await axios.get("/api/users/logout");
        console.log("Logout success");
        toast.success("Logout success");
        router.push("/login");
     } catch (error:any) {
        console.log(error.message);
        toast.error(error.message);
     }
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py2'>
        <h1>Profile page</h1>
        <br />
        <button 
          onClick={logout}
          className='bg-purple-400 hover:bg-purple-600 text-white py-2 px-4 rounded'
        >
          Logout
        </button>
    </div>
  )
}

export default ProfilePage