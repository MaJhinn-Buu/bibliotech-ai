import { createBrowserRouter, Navigate } from 'react-router-dom';
import LayoutExample from './components/LayoutExample';
import StudentDashboard from './views/student/pages/StudentDashboard';
import Login from './views/admin/Login'; // ✅ Adjust this path if needed
import NotFound from './views/NotFound';
import GameInventory from './views/student/pages/GameInventory';
import AdminGameManager from './views/admin/pages/AdminGameManager';


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
        path: '/admin/games',
        element: <AdminGameManager />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

export default router;
