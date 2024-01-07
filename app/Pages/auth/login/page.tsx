import React from 'react';
import { Input, Button } from "@nextui-org/react";


export default function Login() {
    return (
        <div className='w-full h-screen p-4 bg-gradient-to-tr from-cyan-500 to-blue-500'>
            <div className='w-full h-full flex justify-center items-center p-4 '>
                <div className='p-4 w-[20rem] space-y-4 outline outline-1 bg-white rounded-md'>
                    <h1 className='text-3xl text-center p-4'>Login</h1>
                    <Input size='sm' type="text" variant='bordered' label="Username" />
                    <Input size='sm' type="password" variant='bordered' label="Password" />
                    <Button className='p-1 w-full' color="primary">submit</Button>
                </div>
            </div>
        </div>
    )
}
