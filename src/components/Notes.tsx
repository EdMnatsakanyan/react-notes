import { useState } from "react";
import { AddTask } from "./add-note";
import { NotesList } from "./NotesList";

export const Notes = () => {
  const [addIsActive, setAddIsActive] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto p-4">
        {/* Centered button within the row */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setAddIsActive(true)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400 transition-all"
          >
            Add Note
          </button>
        </div>

        {/* Add Task Modal */}
        {addIsActive && <AddTask onClose={() => setAddIsActive(false)} />}

        {/* Notes List */}
        <NotesList />
      </div>
    </div>
  );
};
