import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, TextField, Button, Grid } from '@mui/material';

import { getPersonalInfo, handleLogin, getLaborData, getCourseRecords } from '../Services/authService';

// const getData = () => {
//   return new Promise((resolve, reject) => {
//     getPersonalInfo()
//       .then((data) => {
//         name = data.fullname
//         console.log(name);
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

function Repository() {
  return (
    <Box variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
      <Typography >
        {'TalentFest Latam 2023 - Squad Santander '}
      </Typography>
      <Link variant="body2" color="text.secondary" href="https://github.com/Zarahi93/tf-santander">
        Consulta el Repositorio
      </Link>
    </Box>
  );
}
// console.log(handleLogin('alejandro_lo@santander.com.mx','alejandro123'))
export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    if (handleSubmit) {
      await handleLogin(data.get("email"), data.get("password"))
      try {
        console.log(localStorage.getItem('user-uid'));
        const data = await getPersonalInfo();
        localStorage.setItem('userData', JSON.stringify(data))
        console.log(JSON.parse(localStorage.getItem('userData')));
        const laborData = await getLaborData();
        localStorage.setItem('laborData', JSON.stringify(laborData))
        console.log(JSON.parse(localStorage.getItem('laborData')));
        const coursesData = await getCourseRecords();
        localStorage.setItem('coursesData', JSON.stringify(coursesData))
        console.log(JSON.parse(localStorage.getItem('coursesData')));
        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Datos incorrectos');
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src="../../logo-login.png" alt="logo" style={{ width: '80%' }} />
          <Typography component="h1" variant="h0" sx={{ mt: 10 }}>
            ¡Hola de nuevo!
          </Typography>
          <Typography component="h2" variant="h2">
            Entra ahora
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} fontFamily={"Santander Text W05 Regular"}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              color='redSantander'
              type='email'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color='redSantander'
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='redSantander'
              sx={{ mt: 3, mb: 15 }}
            >
              Login
            </Button>
            <Repository />
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617563844154-4206853f7865?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  );
}
