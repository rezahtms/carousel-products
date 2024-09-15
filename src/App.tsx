
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage, NotFoundPage, ProductPage } from '@/components';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Outlet />}>
            <Route index element={<HomePage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
