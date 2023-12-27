import {connect} from '@/dbconfig/dbConfig';
import {User} from '@/models/userModel';
import { bcryptjs } from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

connect()

export async function POST(){
    try {
        const reqBody = await NextRequest.json()
        const {username, email, password} = reqBody
    
        console.log(reqBody);

        const user = user.findOne({email});
        if(user){
            return NextResponse.json({error:"User already exists!"},{status:400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        return NextResponse.json({message: "User created Successfully!",
        sucess:true,
        savedUser
        },
        {status:201})

    } catch (error) {
        return NextResponse.json({error: error.message},
        {status:500})
    }
}