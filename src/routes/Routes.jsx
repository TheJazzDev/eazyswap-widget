import React, { Suspense, lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import AuthGuard from '../guards/AuthGuard';
import ProtectedRoute from '../guards/ProtectedRoute';
import Layout from '../components/Layout/Layout';
import AnimatedLogo from '../utils/AnimatedLogo';

const HomePage = lazy(() => import('../pages/HomePage'));
const SigninPage = lazy(() => import('../pages/SigninPage'));
const CoinPage = lazy(() => import('../pages/CoinPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

const routes = () => {
  return (
    <Suspense
      fallback={
        <div className='flex items-center justify-center h-screen'>
          <AnimatedLogo className='w-80' />
        </div>
      }>
      <Routes>
        <Route
          path=''
          element={
            <>
              <Layout />
              <Outlet />
            </>
          }>
          <Route path='/' element={<ProtectedRoute />}>
            <Route index element={<HomePage />} />
            <Route path='/:symbol' element={<CoinPage />} />
          </Route>
          <Route path='signin' element={<AuthGuard />}>
            <Route index element={<SigninPage />} />
          </Route>
        </Route>
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};

export default routes;
