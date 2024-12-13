import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import { ROUTES } from '../libs/constants';

const AppRouter = () => {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/var-react-github/' : '/'}>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
