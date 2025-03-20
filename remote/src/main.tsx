import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Button from './components/Button';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <Button label="Remote Button Component" />
  </StrictMode>,
);
