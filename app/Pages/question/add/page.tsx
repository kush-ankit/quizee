"use client";

import { addQuestions } from "@/Utils/db/question";
import { useRoomCode } from "@/Global/RoomState";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from 'react'

export default function AddQuestion() {
    const [question, setQuestion] = useState("")
    const [optionA, setOptionA] = useState("")
    const [optionB, setOptionB] = useState("")
    const [optionC, setOptionC] = useState("")
    const [optionD, setOptionD] = useState("")
    const [correctOption, setCorrectOption] = useState("")

    const [RoomId]: any = useRoomCode((state: any) => [state.RoomId]);



    async function handleSubmit(e: any) {
        e.preventDefault();
        try {
            await fetch("http://192.168.1.186:3000/api/questions/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ RoomId, question, optionA, optionB, optionC, optionD, correctOption }),
            })
            setQuestion("")
            setOptionA("")
            setOptionB("")
            setOptionC("")
            setOptionD("")
            setCorrectOption("")
            alert("success")
        } catch (error) {
            console.error(error);
        }

    }


    return (
        <div className="flex flex-col w-full h-[80vh] bg-gray-300 rounded-lg p-4">
            <h1 className="text-4xl p-4 font-bold">Add Question</h1>
            <form className="flex flex-col gap-4 md:w-[40%] p-4" onSubmit={handleSubmit} >
                <Input value={question} type="text" label="Question" onChange={(e) => setQuestion(e.target.value)} isRequired={true} />
                <div className="grid grid-cols-2 gap-4" >
                    <Input value={optionA} type="text" label="Option A" onChange={(e) => setOptionA(e.target.value)} isRequired={true} />
                    <Input value={optionB} type="text" label="Option B" onChange={(e) => setOptionB(e.target.value)} isRequired={true} />
                    <Input value={optionC} type="text" label="Option C" onChange={(e) => setOptionC(e.target.value)} isRequired={true} />
                    <Input value={optionD} type="text" label="Option D" onChange={(e) => setOptionD(e.target.value)} isRequired={true} />
                    <Input value={correctOption} type="text" label="Correct Option" onChange={(e) => setCorrectOption(e.target.value)} isRequired={true} />
                </div>
                <Button type="submit" color="primary">Add & Next</Button>
            </form>
        </div>
    )
}
