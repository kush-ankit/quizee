"use client"


import { create } from "zustand";

type Store = {
    RoomId: string
    RoomCode: number
    addRoomCode: (code: number) => void
    addRoomId: (code: string) => void

}

export const useRoomCode = create<Store>((set) => ({
    RoomId: "655e0168513a7689362559d8",
    RoomCode: 0,
    addRoomCode: (code) => {
        set({ RoomCode: code })
    },
    addRoomId: (id) => {
        set({ RoomId: id })
    },
}));
