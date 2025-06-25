import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx'
import UserSwitcher from './components/userSwitcher.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserSwitcher />
  </StrictMode>,
)
