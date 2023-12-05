"use client"

// import { useRoomCode } from "@/Global/RoomState";
// import { useRouter } from 'next/navigation'
import JoinRoomInput from "@/Components/room/roomCodeInput";

export default function Joinroom() {
    // const router = useRouter()
    // const [roomCode]: any = useRoomCode((state: any) => [state.roomCode]);
   

    return (
        <div className="md:p-8 h-[80vh] w-full flex flex-col justify-center items-center">
            <JoinRoomInput />
        </div >
    )
}
