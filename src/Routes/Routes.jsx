import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Components/Home/Home";
import Error from "../Components/Error/Error";

const router = createBrowserRouter([ 
    { 
        path: "/", 
        element: <Root />, 
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>  
            }
        ]
    }
]);
export default router;