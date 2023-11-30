"use client"

import { useRoomCode } from "@/app/Global/RoomState";
import { Button } from "@nextui-org/react";
import { redirect } from "next/navigation";

export default function Createroom() {
    const [RoomCode, addRoomCode]: any = useRoomCode((state: any) => [state.RoomCode, state.addRoomCode]);

    async function handleclick() {
        await fetch('http://localhost:3000/api/room/create')
            .then(response => response.json())
            .then(json => {
                addRoomCode(json.roomCode);
                console.log(json.roomCode);
                if (json.roomCode) redirect('/Pages/question/add')
            })
            .catch(error => console.error(error));
    }
    return (
        <Button color="primary" onClick={handleclick} variant="shadow" className="p-6">Create</Button>
    )
}
