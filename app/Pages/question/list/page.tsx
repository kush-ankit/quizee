"use client"
import { useQuestionState } from '@/Global/QuestionState';
import { useRoomCode } from '@/Global/RoomState';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function QuestionList() {
    const [Question]: any = useQuestionState((state: any) => [state.Question]);
    const [RoomCode]: any = useRoomCode((state: any) => [state.RoomCode]);

    useEffect(() => {
        if (RoomCode === 0) { redirect('/') }
      }, [RoomCode])


    return (
        <div>
            {Question && JSON.stringify(Question)}
            <Button as={Link} color="primary" href="/Pages/question/add" variant="shadow" className="p-6">Add Questions</Button>
        </div>
    )
}