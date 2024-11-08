import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Components/Home/Home";
import Error from "../Components/Error/Error";
import Projects from "../Components/Projects/Projects";

const router = createBrowserRouter([ 
    { 
        path: "/", 
        element: <Root />, 
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>  
            },
            {
                path: "/projects",
                element: <Projects/>  
            },
            {
                path: "/",
                element: <Home></Home>  
            },
            {
                path: "/",
                element: <Home></Home>  
            },
            {
                path: "/",
                element: <Home></Home>  
            }
        ]
    }
]);
export default router;