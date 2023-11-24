"use client"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useRoomCode } from "@/app/Global/RoomState";


export default function Navigbar() {

    const [RoomCode]: any = useRoomCode((state: any) => [state.RoomCode]);


    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">quizEE</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        {RoomCode ? "Room Code:"+RoomCode  : "Room Code"}
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}


