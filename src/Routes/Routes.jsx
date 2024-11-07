import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([ 
    { 
        path: "/", 
        element: <Root />, 
        // errorElement: ,
        children: [
            {
                path: "/",
                element: <Home></Home>  
            }
        ]
    }
]);
export default router;