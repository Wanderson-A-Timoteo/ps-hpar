import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import { deleteTasks, getTasks, updateTask } from "../../api";
import { EditingTaskProps, Item } from '../types';

export const ListItem = ({ setEditingTask } : EditingTaskProps) => {
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
        setError('Ocorreu um erro ao buscar as tarefas. Por favor, tente novamente mais tarde.');
      }
    }
    fetchTasks();
  }, []);

  const handleUpdate = async (taskToUpdate : Item) => {
    setEditingTask(taskToUpdate);
  };

  const handleDelete = async (taskToDelete : Item) => {
    try {
      await deleteTasks(taskToDelete);
      const updatedTasks = tasks.filter(task => task.id !== taskToDelete.id);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Ocorreu um erro ao excluir a tarefa:', error);
    }
  };

  const handleCheckboxChange = async (task: Item) => {
    try {
      const updatedTask = { ...task, done: !task.done };
      await updateTask(updatedTask);

      const updatedTasks = tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t));
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Ocorreu um erro ao atualizar a tarefa:', error);
    }
  };

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        tasks.map(task => (
          <div 
            key={task.id}
            className={`flex justify-between rounded-xl mb-2 p-3 ${
              task.done ? 'bg-gray-400' : 'bg-gray-800'
            }`}
          >
            <div>
              <input 
                className="w-4 h-4 mr-2 align-middle hover:cursor-pointer"
                type="checkbox" 
                checked={task.done}
                onChange={() => handleCheckboxChange(task)}
              />
              <label className="text-gray-300" > {task.description} </label>
            </div>
            <div className="flex gap-3">
              {!task.done && (
                <button 
                  className="hover:cursor-pointer hover:text-green-300"
                  onClick={() => handleUpdate(task)}
                > 
                  <FontAwesomeIcon icon={faPenToSquare} /> 
                </button>
              )}
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
