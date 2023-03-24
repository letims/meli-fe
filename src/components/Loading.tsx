import CircularProgress from '@mui/material/CircularProgress';
import { Container } from '@mui/material';

export default function Loading() {
  return (
    <Container sx={{ display: 'flex', alignItems:   'center', justifyContent: 'center', margin: '50px 0 50px 0' }}>
      <CircularProgress />
    </Container>
  );
}