"use client"
import { useQuestionState } from '@/Global/QuestionState';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function QuestionList() {
    const [Question]: any = useQuestionState((state: any) => [state.Question]);

    return (
        <div>
            {Question && JSON.stringify(Question)}
            <Button as={Link} color="primary" href="/Pages/question/add" variant="shadow" className="p-6">Add Questions</Button>
        </div>
    )
}