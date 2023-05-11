import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';
import { AuthProvider } from './contexts/AuthContext';
import { Login } from './pages/Login';
import { Tasks } from './pages/Tasks';

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
