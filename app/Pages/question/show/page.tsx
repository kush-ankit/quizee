"use client"

import QuestionPage from "@/Components/Question";
import { useQuestionState } from "@/Global/QuestionState";
import { useRoomCode } from "@/Global/RoomState";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { redirect } from 'next/navigation'
import { useEffect, useState } from "react";

export default function Quizpage() {
  const [Question]: any = useQuestionState((state: any) => [state.Question]);
  const [RoomCode] = useRoomCode((state: any) => [state.RoomCode]);
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (RoomCode === 0) { redirect('/') }
  }, [RoomCode])

  if (num === Question.length && Question.length > 0) {
    return (
      Question && <div><Button as={Link} color="primary" href="/Pages/result" variant="shadow" className="p-6">View Result</Button></div>
    )
  } else {
    return (
      <div>
        <QuestionPage Question={Question[num]} />
        <Button onClick={() => setNum(num + 1)}>Next</Button>
      </div>
    )
  }
}
