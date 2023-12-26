"use client"
import React from 'react'
import Link from 'next/link'
import { Axios } from 'axios'
import { useRouter } from 'next/navigation'

export default function SignUpPage(){

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username : ""
    })

    const onSignup =  async() =>{

    }

    return (
        <div className='h-screen flex-col flex justify-center items-center '>
            <h1 className='text-5xl'>
                Signup
            </h1>
            <hr/>
            <label className='py-4'>Username</label>
            <hr/>
            <input
                id='username'
                type='text'
                value={user.username}
                className='py-2 text-black px-2 rounded-lg'
                placeholder='Username'
                onChange={(e)=>setUser({...user, username:e.target.value})}
            />
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
            <label className='py-4'>password</label>
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
            <button onClick={onSignup} className='bg-black border border-gray-300 mb-4 my-4 px-2 py-2 rounded-lg text-white hover:bg-white active:bg-red-500 hover:text-black' >SignUp</button>
            <Link href="/login" >Visit Login Page</Link>
        </div>
    )
}