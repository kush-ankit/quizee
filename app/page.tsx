"use client"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/create">Create</Link>
      <br/>
      <Link href="/join">Join</Link>
    </div>
  )
}
