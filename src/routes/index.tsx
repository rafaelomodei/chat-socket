import { lazy, Suspense } from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import App from '../App';
import { Loading } from '../components/organisms/loading';

const Home = lazy(() => import('../pages/home'));
const Chat = lazy(() => import('../pages/chat'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
