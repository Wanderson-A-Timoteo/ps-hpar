import { useState, KeyboardEvent, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { getTasks, postTasks, updateTask } from '../../api';
import { EditingTaskProps } from '../types';

export const AddArea = ({ editingTask, setEditingTask } : EditingTaskProps) => {
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      await getTasks();
    };

    fetchData();
  }, []);

  const handleNewTask = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputText && !editingTask) {
      return;
    }

    try {
      if (editingTask) {
        await updateTask(editingTask);
        setEditingTask(null);
      } else {
        const data = {
          description: inputText,
          done: false,
        };
        await postTasks(data);
      }
      setInputText('');

      await getTasks();
    } catch (error) {
      setError('Ocorreu um erro ao cadastrar/atualizar a tarefa. Por favor, tente novamente mais tarde.');
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      handleNewTask(e);
    }
  };

  return (
    <form onSubmit={handleNewTask}>
      <div className='flex rounded-2xl p-3 my-5 text-gray-50 border-solid border-[1px]'>
        <div className='mr-2 pt-[5px] text-gray-400'>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <input
          className='flex-1 pt-1 border-none bg-transparent text-lg text-gray-50 outline-none'
          type='text'
          placeholder='Adicione uma tarefa'
          value={editingTask ? editingTask.description : inputText}
          onChange={(e) => {
            if (editingTask) {
              setEditingTask({ ...editingTask, description: e.target.value });
            } else {
              setInputText(e.target.value);
            }
          }}
          onKeyUp={handleKeyUp}
        />
        <button type='submit' className='w-28 h-8 bg-green-700 rounded-lg hover:bg-green-600'>
          Adicionar
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};
