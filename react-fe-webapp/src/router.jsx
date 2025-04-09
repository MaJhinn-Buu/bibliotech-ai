import {createBrowserRouter} from "react-router-dom";
import Login from "./views/login.jsx";
import NotFound from "./views/notfound.jsx";

const route = createBrowserRouter ( [ 

    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <NotFound />
    }

])

export default route;