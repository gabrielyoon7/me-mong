import { Note, NoteForm } from "../types/types.ts";
import Store from "../utils/useExternalStore/Store.ts";

class NoteStore extends Store<Note[]> {
  private notes: Note[] = [];

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
    this.notes = [...this.notes, newNote];
    this.emitChange();
  }

  getSnapshot = () => {
    return this.notes;
  };

}

export const noteStore = new NoteStore();
