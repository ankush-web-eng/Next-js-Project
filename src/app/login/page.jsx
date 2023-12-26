"use client"
import React from 'react'
import Link from 'next/link'
import { Axios } from 'axios'
import { useRouter } from 'next/navigation'

export default function LoginPage(){

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username : ""
    })

    const onSignup =  async() =>{
        
    }

    return (
        <div>
            <h1 className='flex justify-center items-center h-screen text-5xl'>
                Login Page!!
            </h1>
        </div>
    )
}