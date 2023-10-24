import React, { useState } from 'react';
import { Container, Typography, TextField, MenuItem, Button, Grid } from '@mui/material';
import { useTheme } from '@mui/system';

function TimeOffForm() {
  const theme = useTheme();

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
    <Container maxWidth="lg"
      style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        color: theme.palette.txtPrincipal.main,
      }}>
      <Typography variant="h1" align="center" style={{fontSize:"30px", marginBottom:"20px"}}>¡ Solicita tu Time Off !</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="¿Cuál es tu motivo?"
              variant="outlined"
              select
              value={reason}
              onChange={handleReasonChange}
              style={{
                backgroundColor: theme.palette.bgColor.main,
              }}
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
            <Typography variant="h3" align="left" style={{marginBottom: "10px"}}>Desde</Typography>
            <TextField
              fullWidth
              variant="outlined"
              type="date"
              value={fromDate}
              onChange={handleFromDateChange}
              style={{
                backgroundColor: theme.palette.bgColor.main,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h3" align="left" style={{marginBottom: "10px"}}>Hasta</Typography>
            <TextField
              fullWidth
              variant="outlined"
              type="date"
              value={toDate}
              onChange={handleToDateChange}
              style={{
                backgroundColor: theme.palette.bgColor.main,
              }}
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
              style={{
                backgroundColor: theme.palette.bgColor.main,
              }}
            />
          </Grid>
          <Grid item xs={6} align="center">
            <Button variant="contained" onClick={handleCancel} style={{backgroundColor:"white", color: "red"}}>
              Cancelar
            </Button>
          </Grid>
          <Grid item xs={6} align="center">
            <Button variant="contained" onClick={handleSubmit} style={{backgroundColor:"red"}}>
              Solicitar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default TimeOffForm;
