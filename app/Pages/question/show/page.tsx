"use client"
// import QuestionPage from "@/Components/Question";
// import { Answer } from "@/Utils/Answer";
import { findQuestionById } from "@/Utils/db/question";
import { useQuestionState } from "@/app/Global/QuestionState";
// import { Button, Radio, RadioGroup } from "@nextui-org/react";
import { useState, useEffect } from "react";


export default function Quizpage() {

  // const [isQuizStarted, setIsQuizStarted] = useState(false);
  // const [questionNumber, setQuestionNumber] = useState(0);
  const [qtion, setQuestion] = useState([]);
  // const [selected, setSelected] = useState(null || undefined || String);

  const [Question, addQuestion]: any = useQuestionState((state: any) => [state.Question, state.addQuestion]);

  async function fetchQuestions() {
    await addQuestion(await findQuestionById("655e0168513a7689362559d8"))
    await setQuestion(Question)
    console.log(qtion);
  }

  // useEffect(() => {
  // }, [])



  // async function handleChangeQuestion() {
  //   await setQuestionNumber(questionNumber + 1);
  //   // Answer[questionNumber] = selected;
  //   setSelected("")
  // }

  // if (!isQuizStarted) {
  //   return (
  //     <div>
  //       <Button color="primary" variant="solid" onClick={fetchQuestions}>Start Quiz</Button>
  //     </div>
  //   )
  // } else {
  return (
    <div >
      <div onClick={fetchQuestions}>hello</div>
      {/* <div className="flex flex-col gap-3">
          <RadioGroup
            label={qtion[questionNumber].question}
            value={selected}
            onValueChange={setSelected}
          >
            <Radio value={qtion[questionNumber].optionA}>{qtion[questionNumber].optionA}</Radio>
            <Radio value={qtion[questionNumber].optionB}>{qtion[questionNumber].optionB}</Radio>
            <Radio value={qtion[questionNumber].optionC}>{qtion[questionNumber].optionC}</Radio>
            <Radio value={qtion[questionNumber].optionD}>{qtion[questionNumber].optionD}</Radio>
          </RadioGroup>
          <p className="text-default-500 text-small">Selected: {selected}</p>
        </div> */}
      {/* <Button color="primary" variant="bordered" onClick={handleChangeQuestion}>Next</Button> */}
      {/* {Answer} */}
      <div onClick={() => console.log(Question)}>Ram</div>
    </div>
  )
}
// }
