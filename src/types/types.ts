export type TodoTask = {
  id: number;
  title: string;
  description: string;
};

export type CreateTodo = {
  task: TodoTask & { complited: boolean };
};
