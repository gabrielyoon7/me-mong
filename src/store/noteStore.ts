import {Note, NoteForm} from "../types/types.ts";

let nextId = 0;
let notes: Note[] = [];
let listeners: Array<() => void> = [];

export const noteStore = {
  addNote(noteForm: NoteForm) {
    const newNote: Note = {
      id: nextId++,
      date: new Date().toDateString(),
      ...noteForm,
    }
    notes = [...notes, newNote];
    emitChange();
  },
  subscribe(listener: () => void) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return notes;
  }
};

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}
