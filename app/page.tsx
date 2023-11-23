"use client"
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <h1 className="text-4xl text-center">Home</h1>
      <div className="w-full text-center p-12 flex flex-col gap-8">
        <Link className="p-3 outline outline-1 bg-gradient-to-l from-blue-500 to-cyan-500" href="/Pages/createroom">Create Room</Link>
        <Link className="p-3 outline outline-1 bg-gradient-to-l from-blue-500 to-cyan-500" href="/Pages/joinroom">Join Room</Link>
      </div>
    </div>
  )
}
