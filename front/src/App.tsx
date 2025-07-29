import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { Router } from './Router';
import { queryClient } from './app/lib/queryClient';
import { AuthProvider } from './app/providers/AuthProvider';

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router />
          <Toaster />
        </AuthProvider>

        <ReactQueryDevtools buttonPosition="bottom-left" />
      </QueryClientProvider>
    </>
  );
}
