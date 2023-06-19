import { Note, NoteForm } from "../types/types.ts";

class NoteStore {
  private static instance: NoteStore;
  private nextId = 0;
  private notes: Note[] = [];
  private listeners: Array<() => void> = [];

  public static getInstance() {
    if (!NoteStore.instance) {
      NoteStore.instance = new NoteStore();
    }
    return NoteStore.instance;
  }

  public async addNote(noteForm: NoteForm) {
    const response = await fetch(`/memo/create`, {
      method: 'POST',
      body: JSON.stringify(noteForm)
    });
    const data = await response.json();
    console.log(data);

    const newNote: Note = {
      id: this.nextId++,
      date: new Date().toDateString(),
      ...noteForm,
    };
    this.notes = [...this.notes, newNote];
    this.emitChange();
  }

  public subscribe(listener: () => void): () => void {
    this.listeners = [...this.listeners, listener];
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  public getSnapshot() {
    return this.notes;
  }

  private emitChange() {
    for (const listener of this.listeners) {
      listener();
    }
  }
}

const noteStore = NoteStore.getInstance();
export { noteStore };
