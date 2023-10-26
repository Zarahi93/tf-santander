import Header from "./Header";
import Footer from "./Footer";
import { Box, Typography, Link, Button, Grid, Container } from '@mui/material';

export const Help = () => {
  return (
    <div style={{height: '100vh',}}>
      <Box boxShadow={4}>
      <Header style={{boxShadow:"4px"}} />
      </Box>
      <Container maxWidth="lg"
        style={{
          backgroundColor: 'white',
          padding: '20px 20px 58px 20px',
          marginTop: '10px'
        }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" >Soporte, Quejas y Sugerencias</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Utiliza nuestro chatbot de ayuda para mejorar tu experiencia en cualquier duda que tengas sobre tus beneficios como empleado Santander.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Container maxWidth="lg" 
              style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '20px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                marginRight: '10px',
              }}>Aquí irá el chatbot</Container>
          </Grid>
          <Grid item xs={12}>
            <Link variant="body1" href="" >
              Quejas, Sugerencias y Felicitaciones
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" align="center" style={{ backgroundColor: "red" }}>
              Contáctanos
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}

export default Help;
