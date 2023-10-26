import Header from "./Header";
import Footer from "./Footer";
import { Typography, Link, Button, Grid, Container } from '@mui/material';

export const Help = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg"
        style={{
          backgroundColor: 'white',
          padding: '20px',
          margin: "20px 20px 60px 20px",
        }}>
        <Grid container spacing={3}>
          <Typography variant="h3" align="center">Soporte, Quejas y Sugerencias</Typography>
          <Typography variant="body1" align="center" style={{ margin: '20px 0' }}>
            Utiliza nuestro chatbot de ayuda para mejorar tu experiencia en cualquier duda que tengas sobre tus beneficios como empleado Santander.
          </Typography>
          <Link variant="body1" href="/quejas-sugerencias-felicitaciones" align="center">
            Quejas, Sugerencias y Felicitaciones
          </Link>
          <Button variant="contained" >
            Contáctanos
          </Button>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Help;
