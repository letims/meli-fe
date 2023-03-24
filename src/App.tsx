import { Box, Container, Typography } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/Profile';
import MenuAppBar from './components/MenuAppBar';
import LandingPage from './pages/LandingPage';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ marginTop: '20px' }}>
      {'Copyright © 1999-2023 MercadoLibre Chile Ltda.'}
    </Typography>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "profile",
    element: <Profile />,
    errorElement: <ErrorPage />
  }
]);

const pages = [
  {
    name: 'Inicio',
    ref: '/'
  },
  {
    name: 'Perfil',
    ref: '/profile'
  }
];

function App() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <MenuAppBar pages={pages}/>
        <RouterProvider router={router} />
        <Copyright />
      </Box>
    </Container>
  )
}

export default App
