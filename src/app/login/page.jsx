"use Client"
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

    return (
        <div>
            <h1>
                This is a login Page!!
            </h1>
        </div>
    )
}