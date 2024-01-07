"use client"
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Login from "./Pages/auth/login/page";
import Image from "next/image";
import JoinRoomInput from "@/Components/room/roomCodeInput";
import img from '../assets/quizbg.png'

export default function Home() {
  // return (
  //   // <div className="w-full h-[80vh] p-8 flex items-center justify-center ">
  //   //   <div className=" flex gap-8">
  //   //     <Button as={Link} color="primary" href="/Pages/room/create" variant="shadow" className="p-6">Room</Button>
  //   //     <Button as={Link} color="primary" href="/Pages/room/join" variant="shadow" className="p-6">Play</Button>
  //   //   </div>
  //   // </div>
  //   <Login />
  // )
  return (
    <div className="w-full h-screen bg-gradient-to-br from-rose-400 to-fuchsia-400">
      <div className="w-full h-full flex">
        <div className="w-full h-full flex justify-center items-center">
          <Image src={img} alt="img" width={100} height={100} className="w-[20rem] h-[20rem]"/>
        </div>
        <div className="w-full h-full">
          <section className="w-full h-1/2">a</section>
          <section className="w-full h-1/2 flex justify-center items-center">
            {/* <form className="flex gap-4 flex-col outline outline-1 p-4">
              <input className="outline outline-1 w-fit h-fit p-2" name="roomCode" type="number" placeholder='Room Code'/>
              <Button color="primary" className="button-confirm">Join</Button>
            </form> */}
            <JoinRoomInput />
          </section>
        </div>
      </div>
    </div>
  )
}

