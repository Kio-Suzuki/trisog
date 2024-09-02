import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx'
import App from './App.tsx'
import { TourProvider } from './context/TourContext.tsx';
import { ToastContainer } from 'react-toastify';
import './index.css'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TourProvider>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </TourProvider>
    <ToastContainer />
  </StrictMode>
)
