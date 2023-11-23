"use client"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Home</h1>
      <Link href="/Pages/create">Create</Link>
      <br/>
      <Link href="/Pages/join">Join</Link>
    </div>
  )
}
