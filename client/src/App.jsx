import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes';

const App = () => {
  return (
    <HelmetProvider>
      <div className="app">
        <Toaster position="top-right" />
        <AppRoutes />
      </div>
    </HelmetProvider>
  );
};

export default App;
