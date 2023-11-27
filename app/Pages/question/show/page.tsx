"use client"

import { useQuestionState } from "@/app/Global/QuestionState";

export default function Quizpage() {
  const [Question]: any = useQuestionState((state: any) => [state.Question]);

  return (
    <div>
      {Question[0].id !== undefined ? JSON.stringify(Question[0].id) : "loading"}
    </div>
  )
}
