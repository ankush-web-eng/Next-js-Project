import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export default function getDataFromToken (request)  {
    try {
        const token = request.cookies.get('token')?.value || ''
        const verifiedData = jwt.verify(token,process.env.TOKEN_SECRET)

        return verifiedData.id;
    } catch (error) {
        throw new Error(error.message)
    }
}