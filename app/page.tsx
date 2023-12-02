"use client"
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Createroom from "./Pages/room/create/page";
import { redirect } from "next/navigation";
import AddQuestion from "./Pages/question/add/page";
import { useRoomCode } from "@/Global/RoomState";



export default function Home() {
  const [RoomCode, addRoomId, addRoomCode]: any = useRoomCode((state: any) => [state.RoomCode, state.addRoomId, state.addRoomCode]);


  async function handleclick() {
    // await fetch('http://192.168.1.186:3000/api/room/create')
    //   .then(response => response.json())
    //   .then(json => {
    //     addRoomCode(json.roomCode);
    //     addRoomId(json.roomId);
    //   })
    //   .catch(error => console.error(error));
    redirect('/Pages/room/create')
  }

  return (
    <div className="w-full h-[80vh] p-8 flex items-center justify-center">
      <div className=" flex gap-8">
        <Button as={Link} color="primary" href="/Pages/room/create" variant="shadow" className="p-6">Create Room</Button>
        <Button as={Link} color="primary" href="/Pages/room/join" variant="shadow" className="p-6">Join Room</Button>
      </div>
    </div>
  )
}

