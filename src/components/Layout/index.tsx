import { Outlet } from 'react-router-dom';
import Grid from 'components/GridContainer';
import Header from './Header';
import * as Styled from './styles';

const Layout = () => (
  <>
    <Header />
    <Grid justifyContent="center">
      <Styled.Content>
        <Outlet />
      </Styled.Content>
    </Grid>
  </>
);

export default Layout;
