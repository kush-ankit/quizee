"use client"
import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="w-full h-[80vh] p-8 flex items-center justify-center ">
      <div className=" flex gap-8">
        <Button as={Link} color="primary" href="/Pages/room/create" variant="shadow" className="p-6">Room</Button>
        <Button as={Link} color="primary" href="/Pages/room/join" variant="shadow" className="p-6">Play</Button>
      </div>
    </div>
  )
}

