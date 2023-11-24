import React from 'react';
import { createRoutesFromElements, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from '../context/AuthContext';
import AuthGuard from '../guards/AuthGuard';
import ProtectedRoute from '../guards/ProtectedRoute';
import { NextUIProvider } from '@nextui-org/react';
import App from '../App';
import HomePage from '../pages/HomePage';
import SigninPage from '../pages/SigninPage';
import ErrorPage from '../pages/ErrorPage';

const queryClient = new QueryClient();

const routes = createRoutesFromElements(
  <Route
    path=''
    element={
      <React.StrictMode>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <NextUIProvider>
              <App />
            </NextUIProvider>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </AuthProvider>
      </React.StrictMode>
    }>
    <Route path='signin' element={<AuthGuard />}>
      <Route index element={<SigninPage />} />
    </Route>
    <Route path='/' element={<ProtectedRoute />}>
      <Route index element={<HomePage />} />
    </Route>
    <Route path='*' element={<ErrorPage />} />
  </Route>
);

export default routes;