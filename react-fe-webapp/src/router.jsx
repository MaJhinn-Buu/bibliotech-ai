import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/login.jsx";
import NotFound from "./views/notfound.jsx";
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
                path: '/database',
                element: <DatabaseView />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])

export default route;