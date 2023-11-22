import { findQuestionById } from "@/Utils/db/question";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        let questionId = await request.json();
        let question = await findQuestionById(questionId.id);
        return NextResponse.json({ question }, { status: 200 })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 401 })
    }
}