import { useContext, useEffect } from "react";
import { NotesContext } from "../context/contex";
import { NoteItem } from "./Note-item";
import { getAllNotes } from "../context/api";
import {  INote, redTypes } from "../Types";

export const NotesList = () => {
  const context = useContext(NotesContext);
  if (!context) throw new Error("out of provider");
  const { state, dispatch } = context;

  useEffect(() => {
    getAllNotes().then((response) => {
      dispatch({ type: redTypes.SET_NOTES, payload: response as INote[]});
    });
  }, []);

  return (
    <div className="space-y-6 mt-6">
      {state.notes.map((note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </div>
  );
};
