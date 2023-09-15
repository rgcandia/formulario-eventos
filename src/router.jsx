import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import Error404 from './component/Error404/Error404.jsx';
import  Index  from './component/Index/Index.jsx';
import DashHome from "./component/DashHome/DashHome.jsx";
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error404 />,
      children:[
        {
          index:true,
          element:<Index/>
        }
      ]
    },
    
  
  ]);
  
  export default router;