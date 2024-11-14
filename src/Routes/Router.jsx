import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/news',
        element: <h1>News</h1>
    },
    {
        path: '/auth',
        element: <h1>Login</h1>
    },
    {
        path: '*',
        element: <h1>Error</h1>
    },
])
export default Router;