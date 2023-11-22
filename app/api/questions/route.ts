import { NextResponse } from "next/server";
import { addQuestions } from "../../../Utils/db/question";

export async function POST(request: Request) {
    try {
        let ques = await request.body;
        console.log(ques);
        return NextResponse.json("Recieved")
        // let question = await addQuestions();
    } catch (error) {
        console.error(error);
        NextResponse.json({ error }, { status: 401 })
    }
}