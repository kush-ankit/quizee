"use client"

import { useQuestionState } from "@/Global/QuestionState";
import { useRoomCode } from "@/Global/RoomState";
import { Button } from "@nextui-org/react";
import { redirect } from 'next/navigation'
import { useEffect, useState } from "react";

export default function Quizpage() {
  const [Question]: any = useQuestionState((state: any) => [state.Question]);
  const [RoomCode] = useRoomCode((state: any) => [state.RoomCode]);
  const [num, setNum] = useState(0);

  // useEffect(() => {
  //   if (RoomCode === 0) { redirect('/') }
  // }, [RoomCode])

  return (
    <div>
      {/* {Question[0] && JSON.stringify(Question)}
      {Question[0] && Question.map(({ id }: any) =>
        JSON.stringify(id)
      )}
      <Button color="primary" onClick={() => setNum(num + 1)}>Next</Button> */}
      <div className="h-[80vh] w-full flex">
        <div className="w-2/3">
          <h1 className="text-3xl font-semibold">Question :- </h1>
        </div>
        <div className="w-1/3">
        <h1 className="text-3xl font-semibold">List:- </h1>
        </div>
      </div>
    </div>
  )
}
