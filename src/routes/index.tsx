import { Navigate, Route, Routes } from 'react-router-dom';
import Chat from '../pages/chat';
import Home from '../pages/home';

// const home = lazy(() => import('../pages/home'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/chat/:id' element={<Chat />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AppRoutes;
