"use client"

import { useRoomCode } from "@/app/Global/RoomState";
import { useEffect, useState } from "react"

export default function Createroom() {

    const [RoomCode, addRoomCode]: any = useRoomCode((state: any) => [state.RoomCode, state.addRoomCode]);

    useEffect(() => {
        fetch('http://192.168.1.186:3000/api/room/create')
            .then(response => response.json())
            .then(json => addRoomCode(json.roomCode))
            .catch(error => console.error(error));

    }, []);

    return (
        <div>
            {
                RoomCode !== 0 ? RoomCode : <div>loading...</div>
            }
        </div>
    )
}
