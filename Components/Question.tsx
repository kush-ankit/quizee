"use client"

import React, { useState } from "react";
import { RadioGroup, Radio, Button } from "@nextui-org/react";

export default function QuestionPage(props: any) {
    const [selected, setSelected] = useState("");

    if (props.Question && true) {
        return (
            <div className="flex flex-col gap-3">
                <RadioGroup
                    label={props.Question.question}
                    value={selected}
                    onValueChange={setSelected}
                >
                    <Radio value={props.Question.optionA}>{props.Question.optionA}</Radio>
                    <Radio value={props.Question.optionB}>{props.Question.optionB}</Radio>
                    <Radio value={props.Question.optionC}>{props.Question.optionC}</Radio>
                    <Radio value={props.Question.optionD}>{props.Question.optionD}</Radio>
                </RadioGroup>
                <p className="text-default-500 text-small">Selected: {selected}</p>
            </div>
        );
    } else {
        return <div>Loding...</div>
    }
}
