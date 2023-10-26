import axios from 'axios';
import { Item, PosItem } from '../components/types/Item';

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

export const postTasks = async (data: PosItem) => {
  try {
    const response = await axios.post<Item>(`${API_URL}/tasks`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar tarefa:', error);
    throw error;
  }
};
