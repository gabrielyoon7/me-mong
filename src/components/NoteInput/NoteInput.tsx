import {Button, Input, Textarea} from "./NoteInput.style.ts";
import useNoteForm from "../../hooks/useNoteForm.ts";
import {ChangeEvent} from "react";


function NoteInput() {
  const {newNote, setNewNote} = useNoteForm();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewNote((prevState) => ({
      ...prevState,
      title: e.target.value
    }));
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewNote((prevState) => ({
      ...prevState,
      content: e.target.value
    }));
  };

  const handleNewMemo = () => {
    console.log(newNote);
  };

  return (
    <>
      <Button onClick={handleNewMemo}>추가</Button>
      <Input
        value={newNote.title}
        onChange={handleTitleChange}
      />
      <Textarea
        value={newNote.content}
        onChange={handleContentChange}
      />
    </>
  )
}

export default NoteInput;
