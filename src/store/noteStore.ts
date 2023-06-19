import { Note, NoteForm } from "../types/types.ts";

class NoteStore {
  private notes: Note[] = [];
  private listeners: Array<() => void> = [];

  addNote = async (noteForm: NoteForm) => {
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
  };

  subscribe = (listener: () => void) => {
    this.listeners = [...this.listeners, listener];
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  };

  getSnapshot = () => {
    return this.notes;
  };

  private emitChange() {
    for (const listener of this.listeners) {
      listener();
    }
  }
}

export const noteStore = new NoteStore();
