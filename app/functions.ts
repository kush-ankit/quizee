require('dotenv').config();

export async function fetchQuestionsAPI(roomId: string) {
    console.log(process.env);
    return await fetch(`http://localhost:3000/api/questions/fetch`, {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ roomId: roomId }),
        cache: 'no-cache',
    })

}

export async function joinRoomAPI(code: string) {
    return await fetch("http://localhost:3000/api/room/join", {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ roomCode: Number(code) }),
        cache: 'no-cache',
    })
}


export async function addQuestionAPI(RoomId: string, question: string, optionA: string, optionB: string, optionC: string, optionD: string, correctOption: string) {
    return await fetch("http://localhost:3000/api/questions/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ RoomId, question, optionA, optionB, optionC, optionD, correctOption }),
    });
}

export async function createRoomAPI() {
    return await fetch('http://localhost:3000/api/room/create')
}