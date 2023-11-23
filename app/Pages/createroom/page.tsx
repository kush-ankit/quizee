"use client"

import { useEffect, useState } from "react"

export default function Createroom() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('http://192.168.1.186:3000/api/room/join', {
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ roomCode: 84194 }),
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {
                data ? JSON.stringify(data) : <div>loading...</div>
            }
        </div>
    )
}
