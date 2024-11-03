import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'containers/Home';
import { Layout } from 'components';
import { ROUTES } from 'src/constants';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
