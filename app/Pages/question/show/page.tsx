"use client"

import { useQuestionState } from "@/app/Global/QuestionState";
import { useRoomCode } from "@/app/Global/RoomState";
import { Button } from "@nextui-org/react";
import { redirect } from 'next/navigation'
import { useEffect, useState } from "react";

export default function Quizpage() {
  const [Question]: any = useQuestionState((state: any) => [state.Question]);
  const [RoomCode] = useRoomCode((state: any) => [state.RoomCode]);
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (RoomCode === 0) { redirect('/') }
  }, [])

  return (
    <div>
      {JSON.stringify(Question[num])}
      <Button color="primary" onClick={() => setNum(num + 1)}>Next</Button>
    </div>
  )
}
