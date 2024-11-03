import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Router from './routes';
import { store } from './store';
import './index.css';
import { fetchOompaLoompas } from './store/oompaLoompas/slice';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

store.dispatch(fetchOompaLoompas(1));

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>
);
