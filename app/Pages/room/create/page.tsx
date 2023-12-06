"use client"
import CreateButton from "@/Components/room/createButton"
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Createroom() {
    return (
        <div className="w-full h-[80vh] flex justify-center items-center gap-8">
            <CreateButton />
            <Button as={Link} color="primary" href="/Pages/room/myroom" variant="shadow" className="p-6">My Room</Button>
        </div>
    )
}
