"use client"

import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";

export default function QuestionPage({ques} : any) {

    const [selected, setSelected] = React.useState(ques.optionA);
    return (
        // <div className="flex flex-col gap-3">
        //     <RadioGroup
        //         label={ques.question}
        //         value={selected}
        //         onValueChange={setSelected}
        //     >
        //         <Radio value={ques.optionA}>{ques.optionA}</Radio>
        //         <Radio value={ques.optionB}>{ques.optionB}</Radio>
        //         <Radio value={ques.optionC}>{ques.optionC}</Radio>
        //         <Radio value={ques.optionD}>{ques.optionD}</Radio>
        //     </RadioGroup>
        //     <p className="text-default-500 text-small">Selected: {selected}</p>
        // </div>
        <div>{ }</div>
    );
}
