import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from './Provider/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
         <ThemeProvider>
           <ToastContainer />
        <RouterProvider router={router} />
         </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
