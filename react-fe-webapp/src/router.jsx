import { createBrowserRouter, Navigate } from 'react-router-dom';
import LayoutExample from './components/LayoutExample';
import StudentDashboard from './views/student/pages/StudentDashboard';
import Login from './views/admin/login'; // ✅ Adjust this path if needed
import NotFound from './views/notfound';
import GameInventory from './views/student/pages/GameInventory';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutExample />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'student-dashboard',
        element: <StudentDashboard />
      },
      {
        path: 'game-inventory',
        element: <GameInventory />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

export default router;
