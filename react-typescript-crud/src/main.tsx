import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import Router from '@/routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);
