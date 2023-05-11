import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

export function Tasks() {
  const { handleLogout } = useContext(AuthContext);

  return (
    <h1 onClick={handleLogout}>Tasks</h1>
  );
}
