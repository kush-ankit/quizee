"use server"

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addQuestions = async (RoomId: string, question: string, optionA: string, optionB: string, optionC: string, optionD: string, correctOption: string) => {
    return await prisma.questions.create({
        data: {
            question: question,
            optionA: optionA,
            optionB: optionB,
            optionC: optionC,
            optionD: optionD,
            correctOption: correctOption,
            roomRoomId: RoomId
        }
    })
}

export const findQuestionById = async (id: string) =>{
    return await prisma.questions.findMany({
        where: {
            roomRoomId : id,
        }
    });
};