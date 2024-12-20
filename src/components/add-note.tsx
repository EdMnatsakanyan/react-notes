import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { NotesContext } from '../context/contex';
import { addNote } from '../context/api';
import { INote, InputNote, redTypes } from '../Types';
Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '400px',
    backgroundColor: '#2D3748',  // Gray background for the modal
    borderRadius: '8px',         // Optional: rounded corners for a smoother look
  },
};

interface IProps {
  onClose: () => void;
}

export const AddTask: React.FC<IProps> = ({ onClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const context = useContext(NotesContext);
  if (!context) throw new Error('out of provider');
  const { dispatch } = context;

  const handleAdd:SubmitHandler<InputNote> = (note:InputNote) => {
    addNote(note)
      .then(response => {
        dispatch({ type: redTypes.ADD_NOTE, payload: response as INote});
        reset()
        onClose()
      })
  };

  return (
    <Modal isOpen={true} style={customStyles} onRequestClose={onClose}>
      <form onSubmit={handleSubmit(handleAdd)} className="space-y-6 p-4">
        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium text-gray-300">Title</label>
          <input
            {...register('title', { required: 'Title is required' })}
            placeholder="Title of note"
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
          />
        </div>

        {/* Content Input */}
        <div>
          <label className="block text-sm font-medium text-gray-300">Content</label>
          <input
            {...register('content', { required: 'Content is required' })}
            placeholder="Content of note"
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
          />
        </div>

        {/* Add Note Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400 transition-all"
          >
            Add Note
          </button>
        </div>
      </form>
    </Modal>
  );
};
