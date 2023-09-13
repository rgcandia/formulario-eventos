import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import Error404 from './component/Error404/Error404.jsx';
const router =  createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<Error404/>,
        
    },
]);

export default router;