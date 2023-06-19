import { Note, NoteForm } from "../types/types.ts";
import Store from "../utils/useExternalStore/Store.ts";

type StoreType = Note[];

class NoteStore extends Store<StoreType>{

  constructor(initState: StoreType) {
    super(initState);
  }

  async addNote(noteForm: NoteForm) {
    const response = await fetch(`/memo/create`, {
      method: 'POST',
      body: JSON.stringify(noteForm)
    });
    const data = await response.json();
    console.log(data);

    const newNote: Note = {
      id: Math.random(),
      date: new Date().toDateString(),
      ...noteForm,
    };
    this.setState([...this.state, newNote]);
  }
}

export const noteStore = new NoteStore([]);
