import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const addQuestions = (question : string, optionA : string , optionB : string, optionC : string, optionD : string, correctOption : string) => {
    prisma.questions.create({

    })
}