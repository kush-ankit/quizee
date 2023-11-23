"use client"

import { useEffect, useState } from "react"

export default function Joinroom() {
    const [data, setData] = useState(null);
    const [code, setCode] = useState(0)

    function handleclick(event: any) {
        event.preventDefault();
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
    }

    return (
        <div>
            {
                data ? JSON.stringify(data) : <div>loading...</div>
            }
            <form onSubmit={handleclick}>
                <input
                    type="number"
                    id="roomCode"
                    name="roomCode"
                    value={code}
                    placeholder="Room Code"
                    onChange={(event) =>
                        setCode(event.target.value)
                    }
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
