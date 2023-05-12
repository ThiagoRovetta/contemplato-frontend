import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';
import { AuthProvider } from './contexts/AuthContext';
import { Login } from './pages/Login';
import { Tasks } from './pages/Tasks';
import { Layout } from './components/Layout';

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />} >
            <Route path="/tasks" element={<Tasks />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
