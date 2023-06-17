import {useState} from "react";
import {NoteForm} from "../types/types.ts";


const useNoteForm = () => {
  const [newNote, setNewNote] = useState<NoteForm>({
    title: "",
    content: ""
  });

  return {newNote, setNewNote};
};

export default useNoteForm;
