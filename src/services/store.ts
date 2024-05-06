import axios from "axios";
import { create } from "zustand";
import { TodoTask } from "../types/types";

const API_URL = "https://efccf8c1b1d51061.mokky.dev/todos";

interface ITodoStore {
  todo: [] | TodoTask[];
  isLoading: boolean;
  fetchTodos: () => Promise<void>;
  deleteTodos: (id: number) => Promise<void>;
  updateTodos: (update: TodoTask) => Promise<void>;
  createTodos: (newTodo: TodoTask) => Promise<void>;
}

export const useTodoStore = create<ITodoStore>((set, get) => ({
  todo: [],
  isLoading: false,
  fetchTodos: async () => {
    set({ isLoading: true });
    try {
      const result = await axios.get<TodoTask[]>(API_URL);

      set({ todo: result.data });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },

  createTodos: async (newTodo: TodoTask) => {
    try {
      const response = await axios.post<TodoTask>(`${API_URL}`, newTodo);
      const newServiceTodo = response.data;
      set({ todo: [...get().todo, newServiceTodo] });
    } catch (error) {
      console.log(error);
    }
  },

  deleteTodos: async (id: number) => {
    try {
      await axios.delete<TodoTask[]>(`${API_URL}/${id}`);
      set({ todo: get().todo.filter((item) => item.id !== id) });
    } catch (error) {
      console.log(error);
    }
  },

  updateTodos: async (update: TodoTask) => {
    try {
      await axios.patch<TodoTask[]>(`${API_URL}/${update.id}`, update);
      set({
        todo: get().todo.map((item) => {
          if (item.id === update.id) {
            return {
              ...item,
              title: update.title,
              description: update.description,
              complited: update.complited,
            };
          } else {
            return item;
          }
        }),
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
