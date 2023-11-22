import { NextResponse } from "next/server";
import { addQuestions } from "../../../../Utils/db/question";

export async function POST(request: Request) {
    try {
        let ques = await request.json();
        let question = await addQuestions(ques.RoomId, ques.question, ques.optionA, ques.optionB, ques.optionC, ques.optionD, ques.correctOption);
        return NextResponse.json({ question }, { status: 200 })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 401 })
    }
}