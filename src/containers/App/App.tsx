import React from 'react';
import { ToastContainer } from 'react-toastify';
import ThemeProvider from '../../theme';
// import styles from './styles.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import Routes from '../Routes';

function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}

const Providers: React.FC = ({ children }) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
      <ToastContainer hideProgressBar/>
    </>
  );
};

export default App;
