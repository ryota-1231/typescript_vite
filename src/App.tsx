import './App.css';
// import './styles/common.css';
// v6
import { Navigate, useRoutes } from 'react-router-dom';

// Auth
import AuthPage from './components/pages/auth';
import LoginView from './components/pages/auth/LoginView';
import SignupView from './components/pages/auth/SignupView';
// ChatSpace
import ChatSpaceMain from './components/pages/chatSpace/ChatSpaceMain';
import ChatSpaceView from './components/pages/chatSpace/ChatSpaceView';
// NotFound
import PageNotFoundView from './components/pages/error/NotFound';

function App() {
  const authRoutes = {
    path: 'auth',
    element: <AuthPage />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: '', element: <Navigate to="/auth/login" /> },
      { path: 'login', element: <LoginView /> },
      { path: 'signup', element: <SignupView /> },
      { path: '404', element: <PageNotFoundView /> },
    ],
  };

  const chatSpaceRoutes = {
    path: 'chat_space',
    element: <ChatSpaceMain />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: '', element: <ChatSpaceView /> },
      { path: '404', element: <PageNotFoundView /> },
    ],
  };

  const routing = useRoutes([authRoutes, chatSpaceRoutes]);

  return routing;
}

export default App;
