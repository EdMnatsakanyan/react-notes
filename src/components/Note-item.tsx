import React, { useContext, useState } from "react";
import { INote, redTypes } from "../Types";
import { deleteNote } from "../context/api";
import { NotesContext } from "../context/contex";
import { EditNote } from "./edit-note";

interface IProps {
  note: INote;
}

export const NoteItem: React.FC<IProps> = ({ note }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const context = useContext(NotesContext);
  if (!context) throw new Error("out of provider");
  const { dispatch } = context;

  const handleDelete = async (id: string) => {
    deleteNote(id)
      .then((response) => {
        dispatch({ type: redTypes.DELETE_NOTE, payload: response.id });
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all dark:bg-gray-700 flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold text-gray-100 dark:text-gray-200">{note.title}</h3>
        <h2 className="mt-2 text-lg text-gray-300 dark:text-gray-400">{note.content}</h2>
      </div>

      {/* Buttons Container */}
      <div className="flex space-x-2">
        {/* Edit Button */}
        <button
          onClick={() => setIsEdit(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400 transition-all"
        >
          Edit
        </button>

        {/* Delete Button */}
        <button
          onClick={() => handleDelete(note.id)}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-400 transition-all"
        >
          Delete
        </button>
      </div>

      {isEdit && <EditNote onClose={() => setIsEdit(false)} note={note} />}
    </div>
  );
};
