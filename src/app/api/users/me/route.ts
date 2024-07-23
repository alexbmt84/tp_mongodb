import {connect} from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "../../../../../helper/getDataFromToken";
import User from "@/app/models/userModel";

connect()

export async function GET(request:NextRequest){
    try {

        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("username email");
        return NextResponse.json({
            message: "User found",
            data: user
        })

    } catch (error: any) {
        
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}