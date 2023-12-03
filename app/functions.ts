export async function fetchQuestionsAPI(roomId: string) {
    let response = await fetch("http://192.168.1.186:3000/api/questions/fetch", {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ roomId: roomId }),
        cache: 'no-cache',
    })
    let json = response.json();
    return json;
}

export async function joinRoomApi(code: string) {
    let response = await fetch("http://192.168.1.186:3000/api/room/join", {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ roomCode: Number(code) }),
        cache: 'no-cache',
    })
    let json = response.json();
    return json;
}


export async function addQuestionAPI(RoomId: string, question: string, optionA: string, optionB: string, optionC: string, optionD: string, correctOption: string) {
    let response = await fetch("http://192.168.1.186:3000/api/questions/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ RoomId, question, optionA, optionB, optionC, optionD, correctOption }),
    });
    let json = response.json();
    return json;
}