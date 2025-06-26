import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx'
import UserSwitcher from './components/userSwitcher.tsx';
import SettingsPanel from './components/miniDemo.tsx';
import FetchJoke from './components/jokeComponent.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <SettingsPanel/> */}
<FetchJoke/>
  </StrictMode>,
)
