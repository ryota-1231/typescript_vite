import './styles/common.css';
// v6
import { Navigate, useRoutes } from 'react-router-dom';

// TopPage
// ChatSpace
// NotFound
import PageNotFoundView from './components/pages/error/NotFound';
import TopPage from './components/pages/top';

function App() {
  const topRoutes = {
    path: '',
    element: <TopPage />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: '', element: <Navigate to="/" /> },
      { path: '404', element: <PageNotFoundView /> },
    ],
  };
  // const authRoutes = {
  //   path: 'auth',
  //   element: <AuthPage />,
  //   children: [
  //     { path: '*', element: <Navigate to="/404" /> },
  //     { path: '', element: <Navigate to="/auth/login" /> },
  //     { path: 'login', element: <LoginView /> },
  //     { path: 'signup', element: <SignupView /> },
  //     { path: '404', element: <PageNotFoundView /> },
  //   ],
  // };

  // const chatSpaceRoutes = {
  //   path: 'chat_space',
  //   element: <ChatSpaceMain />,
  //   children: [
  //     { path: '*', element: <Navigate to="/404" /> },
  //     { path: '', element: <ChatSpaceView /> },
  //     { path: '404', element: <PageNotFoundView /> },
  //   ],
  // };

  const routing = useRoutes([topRoutes]);

  return routing;
}

export default App;
