import { RandomNumber } from '@/Utils/RandomNumber';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getRooms = () => prisma.room.findMany()

export const createRoom = async () => {
    let Random = await RandomNumber();
    return await prisma.room.create({
        data: { roomCode: Random, }
    });
};

export const findRoomByNumber = (room: number) => {
    return prisma.room.findFirst({
        where: {
            roomCode: room
        }
    });
};
