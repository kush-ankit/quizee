import { findQuestionById } from "@/Utils/db/question";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        let questionId = await request.json();
        console.log(questionId);
        let question = await findQuestionById(questionId.roomId);
        return NextResponse.json(question, { status: 200 })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 401 })
    }
}
