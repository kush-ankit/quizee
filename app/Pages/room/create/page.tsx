"use client"

import CreateButton from "@/Components/room/createButton"
import EnterRoomButton from "@/Components/room/enterRoomButton"
import { useRoomCode } from "@/Global/RoomState";
import { Button } from "@nextui-org/react";
import Link from "next/link";


export default function Createroom() {
    const [RoomCode]: any = useRoomCode((state: any) => [state.RoomCode]);


    if (RoomCode === 0) {
        return (
            <div className="w-full h-[80vh] flex justify-center items-center gap-8">
                <CreateButton />
                <EnterRoomButton />
            </div>
        )
    } else {
        return (
            <div>
                <Button as={Link} color="primary" href="/Pages/question/add" variant="shadow" className="p-6">Add Questions</Button>
            </div>
        )
    }
}
