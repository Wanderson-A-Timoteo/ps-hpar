import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import { deleteTasks, getTasks } from "../../api";
import { Item } from '../types/Item';

export const ListItem = () => {
  const [tasks, setTasks] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        if (data.length === 0) {
          setError('Não há tarefas disponíveis.');
        } else {
          setTasks(data);
        }
      } catch (err) {
        setError('Ocorreu um erro ao buscar as tarefas. Por favor, tente novamente.');
      }
    }
    fetchTasks();
  }, []);

  const handleDelete = async (taskToDelete : Item) => {
    try {
      // Faça uma solicitação de exclusão à API usando a função deleteTasks
      await deleteTasks(taskToDelete);
  
      // Atualize o estado local de tarefas removendo a tarefa excluída
      const updatedTasks = tasks.filter(task => task.id !== taskToDelete.id);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Ocorreu um erro ao excluir a tarefa:', error);
    }
  };

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="flex justify-between rounded-xl mb-2 p-3 bg-gray-800">
            <div>
              <input 
                className="w-5 h-5 mr-2 align-middle hover:cursor-pointer"
                type="checkbox" 
                checked={task.done}
              />
              <label className="text-gray-300" > {task.description} </label>
            </div>
            <div className="flex gap-3">
              <button 
                className="hover:cursor-pointer hover:text-green-300"
                onClick={() => console.log(task)}
              > 
                <FontAwesomeIcon icon={faPenToSquare} /> 
              </button>
              <button 
                className="hover:cursor-pointer hover:text-red-300"
                onClick={() => handleDelete(task)}
              > 
                <FontAwesomeIcon icon={faTrashCan} /> 
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
