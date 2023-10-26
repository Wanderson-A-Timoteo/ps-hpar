import { useState, KeyboardEvent, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { postTasks } from '../../api';
import { getTasks } from '../../api';
import { Item } from '../types/Item';

export const AddArea = () => {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const updatedTasks = await getTasks();
      setTasks(updatedTasks);
    };

    fetchData();

  }, []); 

  const handleNewTask = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputText) {
      return;
    }

    try {
      const data = {
        description: inputText,
        done: false,
      };

      await postTasks(data);
      setInputText('');

      const updatedTasks = await getTasks();
      setTasks(updatedTasks);
    } catch (error) {
      setError('Ocorreu um erro ao cadastrar a tarefa. Por favor, tente novamente mais tarde.');
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      handleNewTask(e);
    }
  };

  return (
    <form onSubmit={handleNewTask}>
      <div className='flex align-middle rounded-2xl p-3 my-5 text-gray-50 border-solid border-[1px]'>
        <div className='mr-2 text-center text-gray-400'>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <input
          className='flex-1 border-none bg-transparent text-lg text-gray-50 outline-none'
          type='text'
          placeholder='Adicione uma tarefa'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        <button type='submit' className='w-24 h-7 bg-green-700 rounded-lg'>
          Adicionar
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};
