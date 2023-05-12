
import { createContext, ReactNode, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { User } from '../types';
import { api } from '../services/api';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthParms {
	username: string;
	password: string;
}

interface AuthContextData {
	authenticated: boolean;
  currentUser: User | null;
	handleLogin: (parms: AuthParms) => void;
	handleLogout: () => void;
  passwordError: boolean;
  setPasswordError: React.Dispatch<React.SetStateAction<boolean>>;
  updateCurrentUser: (user: User) => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/tasks';

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('currentUser');

    if (token && user) {
      setAuthenticated(true);
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  async function handleLogin({ username, password }: AuthParms) {
    try {
      const response = await api.post('/authenticate', {
        username, password
      });

      setPasswordError(false);

      if (response) {
        localStorage.setItem('token', JSON.stringify(response.data.token));
        localStorage.setItem('currentUser', JSON.stringify(response.data.user));

        setAuthenticated(true);

        navigate(from, { replace: true });
      }
    } catch (error: any) {
      console.log('error', error);

      if (error?.response?.status === 401) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }
  }

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');

    api.defaults.headers.authorization = null;

    setAuthenticated(false);
    setCurrentUser(null);

    navigate('/');
  }

  async function updateCurrentUser(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    setCurrentUser(user);
  }

  return (
    <AuthContext.Provider value={{
      authenticated,
      currentUser,
      handleLogin,
      handleLogout,
      passwordError,
      setPasswordError,
      updateCurrentUser
    }}>
      {children}
    </AuthContext.Provider>
  );
}
