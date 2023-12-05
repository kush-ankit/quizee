import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function EnterRoomButton() {

    const [sts, setSts] = useState(false)

    if (!sts){
        return (
            <Button>EnterRoom</Button>
        )
    }else{
        return 
        
    }
}

