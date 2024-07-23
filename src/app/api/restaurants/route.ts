import {connect} from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Restaurant from "@/app/models/restaurantModel";

connect()

export async function GET(request:NextRequest){
    try {

        const restaurants = await Restaurant.find();
        return NextResponse.json({
            message: "Restaurants found",
            data: restaurants
        })

    } catch (error: any) {

        return NextResponse.json({error: error.message}, {status: 400})

    }
}