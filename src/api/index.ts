import axios from 'axios';
import { Item } from '../components/types/Item';

const API_URL = "http://localhost:3000";

export const getTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    throw error;
  }
};

export const postTasks = async (data: Item) => {
  try {
    const response = await axios.post<Item>(`${API_URL}/tasks`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar tarefa:', error);
    throw error;
  }
};

export const updateTask = async (data: Item) => {
  try {
    await axios.put(`${API_URL}/tasks/${data.id}`, data);
  } catch (error) {
    console.error('Erro ao atualizar a tarefa:', error);
    throw error;
  }
};

export const deleteTasks = async (data: Item) => {
  try {
    await axios.delete(`${API_URL}/tasks/${data.id}`);
  } catch (error) {
    console.error('Erro ao excluir a tarefa:', error);
    throw error;
  }
};
