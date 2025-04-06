import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from "./App";
import {Toaster} from "sonner";

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <App />
        <Toaster />
  </StrictMode>
);

