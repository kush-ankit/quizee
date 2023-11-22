import { NextResponse } from "next/server";
import { getRooms } from "../../../../Utils/db/room";


export async function GET(request: Request) {
    try {
        let rooms = await getRooms();
        return NextResponse.json(rooms);
    } catch (error) {
        console.error(error);
    };
}
