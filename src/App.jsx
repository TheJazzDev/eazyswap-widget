import { AuthProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NextUIProvider } from '@nextui-org/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Routes from './routes/Routes';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='font-cascadia-normal'>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <NextUIProvider>
            <Routes />
          </NextUIProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
