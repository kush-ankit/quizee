"use client"

import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";

export default function QuestionPage() {
    const [selected, setSelected] = React.useState("london");
    const opt = "hello"

    return (
        <div className="flex flex-col gap-3">
            <RadioGroup
                label="Select your favorite city"
                value={selected}
                onValueChange={setSelected}
            >
                <Radio value={opt}>{opt}</Radio>
                <Radio value="sydney">Sydney</Radio>
                <Radio value="san-francisco">San Francisco</Radio>
                <Radio value="london">London</Radio>
                <Radio value="tokyo">Tokyo</Radio>
            </RadioGroup>
            <p className="text-default-500 text-small">Selected: {selected}</p>
        </div>
    );
}
