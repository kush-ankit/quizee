"use client"

import { useRoomCode } from "@/Global/RoomState";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useQuestionState } from "@/Global/QuestionState";
import { fetchQuestionsAPI, joinRoomAPI } from "@/app/functions";
import { useRouter } from "next/navigation";


export default function Joinroom() {

    const router = useRouter()
    const [code, setCode] = useState("");
    const [addRoomCode, addRoomId]: any = useRoomCode((state: any) => [state.addRoomCode, state.addRoomId]);
    const [addQuestion]: any = useQuestionState((state: any) => [state.addQuestion]);


    async function fetchQuestionList(roomId: string) {
        try {
            let questions = await fetchQuestionsAPI(roomId).then(response => response.json())
            addQuestion(questions)
        } catch (error) {
            console.error(error);
        }
    }

    async function handleclick(code: string) {
        await joinRoomAPI(code)
            .then(response => response.json())
            .then(json => {
                addRoomCode(json.roomCode);
                addRoomId(json.roomId);
                fetchQuestionList(json.roomId);
            }).then(()=> router.push("/Pages/question/show"))
            .catch(error => console.error(error));
    }

    return (
        <div className="md:p-8 h-[80vh] w-full flex flex-col justify-center items-center">
            <form className="flex gap-4 flex-col outline outline-1 p-4" onClick={(ev) => (ev.preventDefault())} >
                <label className="text-3xl font-bold">Room Code</label>
                <input className="outline outline-1 w-fit h-fit p-2 rounded-lg" name="roomCode" type="number" placeholder='Room Code' onChange={(ev) => setCode(ev.target.value)} />
                <Button color="primary" className="button-confirm" onClick={() => handleclick(code)}>Join</Button>
            </form>
        </div >
    )
}