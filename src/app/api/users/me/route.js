import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import getDataFromToken from "@/helpers/getDataFromToken"
import { NextResponse, NextRequest } from "next/server"

connect()

export async function GET(request){
    try {
        const userId = await getDataFromToken(request)
        const user = await User.findOne({_id : userId}).select("-password")
        
        return NextResponse.json({
            mesaaage: "User Found!",
            data:user
        })
    } catch (error) {
        return NextResponse.json({error:error.message},{status:400})
    }
}