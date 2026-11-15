import { createRoot } from 'react-dom/client';
import { App } from './App';

// Finds <div id="root"> and injects your entire React app into it
createRoot(document.getElementById('root')!).render(<App />);