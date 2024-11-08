import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Components/Home/Home";
import Error from "../Components/Error/Error";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Projects from "../Components/Projects/Projects";
import Blogs from "../Components/Blogs/Blogs";
import Articles from "../Components/Articles/Articles";
import CFC from "../Components/CFC/CFC";
import Volunteers from "../Components/Volunteers/Volunteers";
import Donation from "../Components/Donation/Donation";

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
            },
            {
                path:"/projects",
                element: <Projects/>
            },
            {
                path:"/blogs",
                element: <Blogs/>
            },{
                path:"/articles",
                element: <Articles/>
            },
            {
                path:"/carbonFootprintCalculator",
                element: <CFC/>
            },
            {
                path:"/volunteers",
                element: <Volunteers/>
            },
            {
                path:"/donations",
                element: <Donation/>
            }
            
        ]
    }
]);
export default router;