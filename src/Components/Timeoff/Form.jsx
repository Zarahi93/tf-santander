import React, { useState } from 'react';
import { createTheme, ThemeProvider, Container, Typography, TextField, MenuItem, Button, Grid } from '@mui/material';

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', 
          padding: '20px',
          color: 'black',
        },
      },
    },
  },
});

function TimeOffForm() {
    const [reason, setReason] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [description, setDescription] = useState('');

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCancel = () => {
    console.log('Cancel')
  };

  const handleSubmit = () => {
    console.log('Motivo:', reason);
    console.log('Desde:', fromDate);
    console.log('Hasta:', toDate);
    console.log('Descripción:', description);
    // Agregar lógica para envío de form
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center">¡ Solicita tu Time Off !</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Cual es tu motivo?"
                variant="outlined"
                select
                value={reason}
                onChange={handleReasonChange}
              >
                <MenuItem value="vacaciones">Vacaciones</MenuItem>
                <MenuItem value="incapacidadEnf">Incapacidad por enfermedad</MenuItem>
                <MenuItem value="incapacidadMat">Incapacidad por maternidad</MenuItem>
                <MenuItem value="maternidadBiol">Maternidad biológica</MenuItem>
                <MenuItem value="maternidadAdop">Maternidad adoptiva</MenuItem>
                <MenuItem value="paternidad">Paternidad</MenuItem>
                <MenuItem value="muerteMaterna">Fallecimiento materno</MenuItem>
                <MenuItem value="maternidadAdd">Adicional por maternidad</MenuItem>
                <MenuItem value="guardería">Guardería</MenuItem>
                <MenuItem value="personal">Asuntos personales</MenuItem>
                <MenuItem value="intervencionFam">Intervención conyuge, hijos o padres</MenuItem>
                <MenuItem value="muerteFam">Fallecimiento familiar directo</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" style={{ fontWeight: 'bold' }} align="left">Desde</Typography>
              <TextField
                fullWidth
                variant="outlined"
                type="date"
                value={fromDate}
                onChange={handleFromDateChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" style={{ fontWeight: 'bold' }} align="left">Hasta</Typography>
              <TextField
                fullWidth
                variant="outlined"
                type="date"
                value={toDate}
                onChange={handleToDateChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descripción"
                variant="outlined"
                multiline
                rows={4}
                value={description}
                onChange={handleDescriptionChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={handleCancel}>
                Cancelar
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={handleSubmit}>
                Solicitar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </ThemeProvider>
  );
}

export default TimeOffForm;
