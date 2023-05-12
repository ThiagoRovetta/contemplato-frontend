import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';
import { AuthProvider } from './contexts/AuthContext';
import { Login } from './pages/Login';
import { Tasks } from './pages/Tasks';
import { Layout } from './components/Layout';
import { StarWars } from './pages/StarWars';
import { Loading } from './components/Loading';
import { LoadingProvider } from './contexts/LoadingContext';

export function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <AuthProvider>
          <GlobalStyle />
          <Loading />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<Layout />} >
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/star_wars" element={<StarWars />} />
            </Route>
          </Routes>
        </AuthProvider>
      </LoadingProvider>
    </BrowserRouter>
  );
}
