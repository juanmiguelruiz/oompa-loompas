import { Outlet } from 'react-router-dom';
import Header from './Header';
import * as Styled from './styles';

const Layout = () => (
  <>
    <Header />
    <Styled.Main>
      <Styled.Content>
        <Outlet />
      </Styled.Content>
    </Styled.Main>
  </>
);

export default Layout;
