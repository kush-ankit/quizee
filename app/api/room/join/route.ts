import { NextResponse } from "next/server";
import { findRoomByNumber, getRooms } from "../../../../Utils/db/room";


export async function POST(request: Request) {
    try {
        let roomNumber = await request.json()
        let room = await findRoomByNumber(roomNumber.roomCode);
        console.log(room);
        return NextResponse.json(room);
    } catch (error) {
        console.error(error);
    };
}

