"use client"

import { create } from "zustand";

type Store = {
    Question: {
        id: string;
        question: string;
        optionA: string;
        optionB: string;
        optionC: string;
        optionD: string;
        correctOption: string;
        roomRoomId: string;
    }[],
    addQuestion: (ques: {
        id: string;
        question: string;
        optionA: string;
        optionB: string;
        optionC: string;
        optionD: string;
        correctOption: string;
        roomRoomId: string;
    }[]) => void
}

export const useQuestionState = create<Store>((set) => ({
    Question: [],
    addQuestion: (ques) => {
        set({ Question: ques })
    }
}));
