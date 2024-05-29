import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import IssueList from './pages/IssueList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    ErrorElement: <NotFound />,
    children: [{ index: true, path: '/', element: <IssueList /> }],
  },
]);

export default router;
