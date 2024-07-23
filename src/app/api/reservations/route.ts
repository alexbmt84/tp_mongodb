// /pages/api/reservations.js

import {connect} from "@/dbConfig/dbConfig";
import ReservationModel from "@/app/models/reservationModel";
import { NextRequest, NextResponse } from "next/server";


// Connect to the database
connect();

// Handle POST requests
export async function POST(request: NextRequest) {

    try {

        const reqBody = await request.json()
        const {restaurantId, name, email, phone, date, message} = reqBody;

        const newReservation = new ReservationModel({
            restaurantId,
            name,
            email,
            phone,
            date: new Date(date),
            message
        });

        await newReservation.save();

        return NextResponse.json({
            message: "Reservation successfully created",
            data: newReservation
        });

    } catch (error) {
        // @ts-ignore
        return NextResponse.json({error: error.message}, {status: 500})
    }
}