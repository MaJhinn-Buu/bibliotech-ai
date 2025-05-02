import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/login.jsx";
import NotFound from "./views/notfound.jsx";
import Display from "./views/display.jsx";
import LayoutExample from "./components/layoutexample.jsx";

const route = createBrowserRouter ( [ 

    {
        path: '/',
        element: <LayoutExample />,
        children: [
            {
                path: '/',
                element: <Navigate to="/login" />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/displaytest',
                element: <Display />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])

export default route;