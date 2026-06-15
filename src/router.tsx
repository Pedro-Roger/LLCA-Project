import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Tecnologia from './pages/Tecnologia';
import Areas from './pages/Areas';
import Publicacoes from './pages/Publicacoes';
import Contato from './pages/Contato';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'historia', element: <Historia /> },
      { path: 'tecnologia', element: <Tecnologia /> },
      { path: 'areas', element: <Areas /> },
      { path: 'publicacoes', element: <Publicacoes /> },
      { path: 'contato', element: <Contato /> },
    ],
  },
]);
