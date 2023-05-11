import { FormEvent, useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Button, Container, Content, FormGroup, ErrorContainer } from './styles';

import { AuthContext } from '../../contexts/AuthContext';

export function Login() {
  const { authenticated, handleLogin, passwordError } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setLoading(true);

    handleLogin({ username, password });

    setLoading(false);
  }

  useEffect(() => {
    if (username && password) {
      setIsFormCompleted(true);
    } else {
      setIsFormCompleted(false);
    }
  }, [username, password]);

  if (authenticated) {
    return <Navigate to='/home' />;
  }

  return (
    <Container>
      <Content>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor='username'>Usuário</label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='Seu usuário'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor='password'>Senha</label>
            <input
              type={'password'}
              id='password'
              name='password'
              placeholder='Sua senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={passwordError ? 'error' : ''}
            />
            {passwordError && (
              <ErrorContainer>
                <span>Senha incorreta. Tente novamente</span>
              </ErrorContainer>
            )}
          </FormGroup>
          <Button type='submit' className={`${isFormCompleted ? 'active' : ''}`}>
            {loading ? 'Carregando...' : 'Fazer login'}
          </Button>
        </form>
      </Content>
    </Container>
  );
}
