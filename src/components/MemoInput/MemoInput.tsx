import {useState} from "react";
import {Button, Input, Textarea} from "./MemInput.style.ts";

export interface NewMemo {
  title: string;
  content: string;
}

function MemoInput() {
  const [newMemo, setNewMemo] = useState<NewMemo>({
    title: "",
    content: ""
  });

  const handleNewMemo = () => {
    console.log(newMemo);
  };

  return (
    <>
      <Button onClick={handleNewMemo}>추가</Button>
      <Input
        value={newMemo.title}
        onChange={(e) =>
          setNewMemo((prevState) => ({
            ...prevState,
            title: e.target.value
          }))
        }
      />
      <Textarea
        value={newMemo.content}
        onChange={(e) =>
          setNewMemo((prevState) => ({
            ...prevState,
            content: e.target.value
          }))
        }
      />
    </>
  )
}

export default MemoInput;
