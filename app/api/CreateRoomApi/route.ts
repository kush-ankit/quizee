import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();


export const GET = async () => {
    const RandomRoomCode = await Math.floor((Math.random()) * 100000);
    const RoomCode = await prisma.room.create({
        data: {
            roomCode: RandomRoomCode,
        }
    });    
    return NextResponse.json({ RoomCode }, { status: 200 });
};