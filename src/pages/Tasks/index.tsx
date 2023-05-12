import { useContext, useEffect, useState } from 'react';

import { Container, InputContainer, TasksContainer } from './styles';
import { api } from '../../services/api';
import { Task } from '../../types';
import { LoadingContext } from '../../contexts/LoadingContext';

export function Tasks() {
  const { setLoading } = useContext(LoadingContext);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    setLoading(true);

    api.get('/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.log('error', error);
      }).finally(() => {
        setLoading(false);
      });
  }, [setLoading]);

  async function addTask() {
    setLoading(true);

    api.post('/tasks', {
      task
    }).then((response) => {
      setTasks((prevState) => {
        return [...prevState, response.data];
      });
      setTask('');
    }).catch(error => {
      console.log('error', error);
    }).finally(() => {
      setLoading(false);
    });
  }

  async function updateTaskStatus(taskId: number, done: boolean) {
    setLoading(true);

    api.patch(`/tasks/${taskId}`, {
      done: !done
    }).then(() => {
      setTasks((prevState) => {
        const newTasks = [...prevState];

        const taskToUpdate = newTasks.find((t) => t.id === taskId);

        if (taskToUpdate) {
          taskToUpdate.done = !done;
        }

        return newTasks;
      });
    }).catch(error => {
      console.log('error', error);
    }).finally(() => {
      setLoading(false);
    });
  }

  async function deleteTask(taskId: number) {
    setLoading(true);

    api.delete(`/tasks/${taskId}`).then(() => {
      setTasks((prevState) => {
        const newTasks = [...prevState];

        const indexToDelete = newTasks.findIndex((t) => t.id === taskId);

        if (indexToDelete !== -1) {
          newTasks.splice(indexToDelete, 1);
        }

        return newTasks;
      });
    }).catch(error => {
      console.log('error', error);
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <Container>
      <InputContainer>
        <input
          type="text"
          id="task"
          placeholder="Adicione uma tarefa"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button
          type="button"
          onClick={addTask}
        >
          Adicionar
        </button>
      </InputContainer>
      <TasksContainer>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div>
                <input
                  type="checkbox"
                  name='done'
                  id='done'
                  checked={task.done}
                  onChange={() => updateTaskStatus(task.id, task.done)}
                />
                <p>{task.task}</p>
              </div>
              <button
                type='button'
                onClick={() => deleteTask(task.id)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </TasksContainer>
    </Container>
  );
}
