"use client"
import React,{useEffect} from 'react'
import Link from 'next/link'
import  axios  from 'axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Header from '@/components/navbar'

export default function LoginPage(){
    const router  = useRouter()
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false)

    const onLogin =  async() =>{
        try {
            const response = await axios.post("/api/users/login", user)
            console.log("Login Successful",response.data)
            router.push("/profile")
            toast.success("Login Successful!")
        } catch (error) {
            console.log("Login Failed!!")
            toast.error("Login Failed")
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if (
          user.email.length > 5 &&
          user.password.length > 7
        ) {
          setButtonDisabled(false);
        } else {
          setButtonDisabled(true);
        }
      }, [user]);

    return (
        <>
        <Header />
        <div className='h-screen flex-col flex justify-center items-center '>
            <h1 className='text-5xl'>
            {loading?"processing" : "Login"}
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
            <button onClick={onLogin} className='bg-black border border-gray-300 mb-4 my-4 px-2 py-2 rounded-lg text-white
             hover:bg-white active:bg-red-500 hover:text-black' >{buttonDisabled?"No Login":"Login"}</button>
            <Link href="/signup" >Visit Signup Page</Link>
        </div>
        </>
    )
}