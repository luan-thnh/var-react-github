import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import { ROUTES } from '../libs/constants';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
