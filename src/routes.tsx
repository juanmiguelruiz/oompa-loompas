import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'containers/Home';
import OompaLoompaDetail from 'containers/OompaLoompaDetail';
import { Layout } from 'components';
import { ROUTES } from 'src/constants';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.OOMPA_LOOMPA_DETAIL} element={<OompaLoompaDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
