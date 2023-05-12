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

export interface Character {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
}
