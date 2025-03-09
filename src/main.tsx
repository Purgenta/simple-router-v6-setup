
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CustomRouter from './CustomRouter.tsx';



createRoot(document.getElementById('root')!).render(

    <CustomRouter>
       
    <App />
    </CustomRouter>
 
)
