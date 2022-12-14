import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { createHashHistory } from 'history';
import { CircularProgress, Container } from '@chakra-ui/react';
import Home from '../pages/home';
import Chat from '../pages/chat';
import { theme } from '../utils/themes';
import { ContactList } from '../components/organisms/contactList';
import { Text } from '../pages/Test';

// const home = lazy(() => import('../pages/home'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Text />} />
      <Route path='/chat/:id' element={<Chat />} />
    </Routes>
  );
};

export default AppRoutes;
