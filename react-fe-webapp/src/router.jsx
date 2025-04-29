import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/login.jsx";
import NotFound from "./views/notfound.jsx";
import LayoutExample from "./components/layoutexample.jsx";

import AdminDashboard from "./admin/pages/dashboard.jsx";
import AdminLogin from "./admin/pages/login.jsx";

const route = createBrowserRouter([
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
                path: '/admin/login',
                element: <AdminLogin />
            },
            {
                path: '/admin/dashboard',
                element: <AdminDashboard />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);

export default route;
