import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextResponse } from 'next/server'

connect()

export async function verifyEmail(NextRequest){
    try {
        const reqBody = await NextRequest.json()
        const {token} = reqBody
        console.log(token)

        const user = User.findOne({verifyToken : token ,
            verifyTokenExpiry : {$gt: Date.now()}
        })

        if(!user){
            return NextResponse.json({error:"Invalid Token"},{status:400})
        }

        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        user.isVerified = true;
        await user.save()

        return NextResponse.json({
            message : "Email Verified Successfully",
            success: true
        })

    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}