"use client"
import React from 'react'
import Link from 'next/link'
import { Axios } from 'axios'
import { useRouter } from 'next/navigation'

export default function LoginPage(){

    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const onLogin =  async() =>{

    }

    return (
        <div className='h-screen flex-col flex justify-center items-center '>
            <h1 className='text-5xl'>
                Login
            </h1>
            <hr/>
            <label className='py-4'>Email</label>
            <hr/>
            <input
                id='email'
                type='email'
                value={user.email}
                className='py-2 text-black px-2 rounded-lg'
                placeholder='email'
                onChange={(e)=>setUser({...user, email:e.target.value})}
            />
            <label className='py-4'>Password</label>
            <hr/>
            <input
                id='password'
                type='password'
                value={user.password}
                className='py-2 text-black px-2 rounded-lg'
                placeholder='password'
                onChange={(e)=>setUser({...user, password:e.target.value})}
            />
            <hr/>
            <button className='bg-black border border-gray-300 mb-4 my-4 px-2 py-2 rounded-lg text-white hover:bg-white active:bg-red-500 hover:text-black' >Login</button>
            <Link href="/signup" >Visit Signup Page</Link>
        </div>
    )
}