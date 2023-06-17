import {Button, Input, Textarea} from "./NoteInput.style.ts";
import useNoteForm from "../../hooks/useNoteForm.ts";

function NoteInput() {
  const {newNote, setNewNote} = useNoteForm();

  const handleNewMemo = () => {
    console.log(newNote);
  };

  return (
    <>
      <Button onClick={handleNewMemo}>추가</Button>
      <Input
        value={newNote.title}
        onChange={(e) =>
          setNewNote((prevState) => ({
            ...prevState,
            title: e.target.value
          }))
        }
      />
      <Textarea
        value={newNote.content}
        onChange={(e) =>
          setNewNote((prevState) => ({
            ...prevState,
            content: e.target.value
          }))
        }
      />
    </>
  )
}

export default NoteInput;
