import { create } from "zustand";

type Store = {
    RoomId: string
    RoomCode: number
    addRoomCode: (code: number) => void
    addRoomId: (code: string) => void

}

export const useRoomAdminStore = create<Store>((set) => ({
    RoomId: "",
    RoomCode: 0,
    addRoomCode: (code) => {
        set({ RoomCode: code })
    },
    addRoomId: (id) => {
        set({ RoomId: id })
    },
}));