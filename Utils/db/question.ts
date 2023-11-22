import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addQuestions = async (question : string, optionA : string , optionB : string, optionC : string, optionD : string, correctOption : string) => {
    return await prisma.questions.create({
        data: {
            question : question,
            optionA : optionA,
            optionB : optionB,
            optionC : optionC,
            optionD : optionD,
            correctOption : correctOption
        }
    })
}