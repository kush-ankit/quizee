"use client"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, User, AvatarIcon } from "@nextui-org/react";
import { useRoomCode } from "@/Global/RoomState";


export default function Navigbar() {

    const [RoomCode]: any = useRoomCode((state: any) => [state.RoomCode]);


    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">quizEE</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <User
                        name={RoomCode ? RoomCode : "User"}
                        avatarProps={{
                            icon: <AvatarIcon/>,
                            size: 'lg',
                            showFallback: true,
                        }}
                    />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}


