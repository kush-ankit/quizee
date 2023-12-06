import { Button } from "@nextui-org/react";
import { useRoomCode } from "@/Global/RoomState";
import { useQuestionState } from "@/Global/QuestionState";
import { createRoomAPI, fetchQuestionsAPI } from "@/app/functions";
import { useRouter } from "next/navigation";

export default function CreateButton() {
    const [addRoomId, addRoomCode]: any = useRoomCode((state: any) => [state.addRoomId, state.addRoomCode]);
    const [addQuestion]: any = useQuestionState((state: any) => [state.addQuestion]);
    const router = useRouter();

    async function fetchQuestions(roomId: string) {
        await fetchQuestionsAPI(roomId)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                addQuestion(json)
            })
            .catch(error => console.error(error));
    }


    async function handleclick() {
        if (confirm("Are you sure to want to create room ?")) {
            await createRoomAPI()
                .then(response => response.json())
                .then(json => {
                    addRoomCode(json.roomCode);
                    addRoomId(json.roomId);
                    fetchQuestions(json.roomId);
                }).then(() => router.push("/Pages/question/add"))
                .catch(error => console.error(error));
        }
    }

    return (
        <Button onClick={handleclick}>Create</Button>
    )

}
