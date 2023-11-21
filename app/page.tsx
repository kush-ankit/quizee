"use client"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/Pages/create">Create</Link>
      <br/>
      <Link href="/Pages/join">Join</Link>
    </div>
  )
}
