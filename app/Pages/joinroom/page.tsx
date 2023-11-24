"use client"

import { useRoomCode } from "@/app/Global/RoomState";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation'

export default function Joinroom() {
    const [code, setCode] = useState("");
    const router = useRouter()
    let abc = 0;


    const [addRoomCode]: any = useRoomCode((state: any) => [state.addRoomCode]);


    async function handleclick() {
        await fetch('http://192.168.1.186:3000/api/room/join', {
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ roomCode: Number(code) }),
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(json => {
                addRoomCode(json.roomCode);
                abc = json.roomCode;
            })
            .catch(error => console.error(error));
        if (abc !== 0) { router.push('/Pages/quiz') }
    }

    return (

        <div className="md:p-8 h-[80vh] w-full flex justify-center items-center">
            <form className="flex gap-4 flex-col outline outline-1 p-4" onClick={(ev) => (ev.preventDefault())} >
                <label className="text-3xl font-bold">Room Code</label>
                <input className="outline outline-1 w-fit h-fit p-2 rounded-lg" name="roomCode" type="number" placeholder='Room Code' onChange={(ev) => setCode(ev.target.value)} />
                <Button color="primary" className="button-confirm" onClick={handleclick}>Join</Button>
            </form>
        </div>
    )
}
