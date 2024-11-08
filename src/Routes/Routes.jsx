import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Components/Home/Home";
import Error from "../Components/Error/Error";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

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
                path: "/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            }
        ]
    }
]);
export default router;