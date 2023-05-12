import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { Container } from './styles';

export function Header() {
  const location = useLocation();

  return (
    <Container>
      <div className="navbar">
        <Link to='/tasks' className={location.pathname.includes('tasks') ? 'active' : ''}>
          <p>Tasks</p>
        </Link>
        <Link to='/star_wars' className={location.pathname.includes('star_wars') ? 'active' : ''}>
          <p>Personagens de Star Wars</p>
        </Link>
      </div>
    </Container>
  );
}
