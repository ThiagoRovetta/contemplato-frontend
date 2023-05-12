export interface User {
  id: number;
  username: string;
  password: string;
}

export interface Task {
  id: number;
  task: string;
  done: boolean;
  userId: number;
}
