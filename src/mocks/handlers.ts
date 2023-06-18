// src/mocks/handlers.js
import {rest} from 'msw'
import {getLocalStorage, setLocalStorage} from "../utils/storage.ts";
import {Note, NoteForm} from "../types/types.ts";
import {LOCAL_STORAGE_KEY_NOTES} from "../api/keys.ts";

export const handlers = [
  // rest.post('/login', (req, res, ctx) => {
  //   // Persist user's authentication in the session
  //   sessionStorage.setItem('is-authenticated', 'true')
  //
  //   return res(
  //     // Respond with a 200 status code
  //     ctx.status(200),
  //   )
  // }),

  // rest.get('/user', (req, res, ctx) => {
  //   // Check if the user is authenticated in this session
  //   const isAuthenticated = sessionStorage.getItem('is-authenticated')
  //
  //   if (!isAuthenticated) {
  //     // If not authenticated, respond with a 403 error
  //     return res(
  //       ctx.status(403),
  //       ctx.json({
  //         errorMessage: 'Not authorized',
  //       }),
  //     )
  //   }
  //
  //   // If authenticated, return a mocked user details
  //   return res(
  //     ctx.status(200),
  //     ctx.json({
  //       username: 'admin',
  //     }),
  //   )
  // }),

  rest.post('/memo/create', (req, res, ctx) => {
    const body = req.body as string;
    const newNoteForm: NoteForm = JSON.parse(body);

    console.log(newNoteForm);
    const prevNotes = getLocalStorage<Note[]>(LOCAL_STORAGE_KEY_NOTES, []);
    const newNote: Note = {
      id: prevNotes.length,
      date: new Date().toDateString(),
      ...newNoteForm
    }
    setLocalStorage<Note[]>(LOCAL_STORAGE_KEY_NOTES, [...prevNotes, newNote])

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json('create')
    )
  }),
]
