import {Note, NoteForm} from "../types/types.ts";

let nextId = 0;
let notes: Note[] = [];
let listeners: Array<() => void> = [];

export const noteStore = {
  addNote: async (noteForm: NoteForm) => {
    const response = await fetch(`/memo/create`, {
      method: 'POST',
      body: JSON.stringify(noteForm)
    });
    const data = await response.json();
    console.log(data);

    const newNote: Note = {
      id: nextId++,
      date: new Date().toDateString(),
      ...noteForm,
    };
    notes = [...notes, newNote];
    emitChange();
  },
  subscribe: (listener: () => void) => {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot: () => {
    return notes;
  },
};

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}
