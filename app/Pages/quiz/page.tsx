"use client"

import { useRoomCode } from "@/app/Global/RoomState";
import { useRouter } from "next/navigation"
import Question from '@/Components/Question'



export default function Quizpage() {
  const [RoomCode]: any = useRoomCode((state: any) => [state.RoomCode]);

  const router = useRouter()


  return (
    <div className="bg-slate-300">
      <center>
        <Question />
      </center>
    </div>
  )
}
