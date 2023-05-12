import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { Container } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export function Header() {
  const location = useLocation();

  const { handleLogout } = useContext(AuthContext);

  return (
    <Container>
      <div className="navbar">
        <Link to='/tasks' className={location.pathname.includes('tasks') ? 'active' : ''}>
          <p>Tarefas</p>
        </Link>
        <Link to='/star_wars' className={location.pathname.includes('star_wars') ? 'active' : ''}>
          <p>Personagens de Star Wars</p>
        </Link>
      </div>
      <button type='button' onClick={handleLogout}>
        Sair
      </button>
    </Container>
  );
}
