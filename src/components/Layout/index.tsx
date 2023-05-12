import { Outlet } from 'react-router-dom';

import { Content } from '../Content';
import { Header } from '../Header';

export function Layout() {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </>
  );
}
