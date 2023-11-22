import { NextResponse } from "next/server";
import { createRoom } from "../../../../Utils/db/room";

export const GET = async () => {
    try {
        const RoomCode = await createRoom();
        return NextResponse.json({ RoomCode }, { status: 200 });
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error }, { status: 500 })
    }
};