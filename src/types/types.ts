export interface NoteForm {
  title: string;
  content: string;
}

export interface Note extends NoteForm {
  id: number;
  date: string;
}
