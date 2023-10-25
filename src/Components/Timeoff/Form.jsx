import React, { useState } from 'react';
import { IconButton, Container, Typography, TextField, MenuItem, Button, Grid, Dialog, DialogActions, DialogTitle, DialogContent } from '@mui/material';
import { useTheme } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import permitsTable from '../../Assets/Imgs/permitsTable.png'

function TimeOffForm({ onCancel }) {
  const theme = useTheme();

  const [reason, setReason] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [description, setDescription] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [isImageModalOpen, setImageModalOpen] = useState(false);

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

  const openImageModal = () => {
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
  };


  const handleCancel = () => {
    console.log('Cancel');
    onCancel();
  };

  const handleSubmit = () => {
    if (reason && fromDate && toDate && description) {
      console.log('Motivo:', reason);
      console.log('Desde:', fromDate);
      console.log('Hasta:', toDate);
      console.log('Descripción:', description);
      // Agregar lógica para envío de form
      onCancel();
    } else {
      setShowWarning(true);
    }
  };

  return (
    <Container maxWidth="lg"
      style={{
        backgroundColor: 'white',
        padding: '20px',
        color: theme.palette.txtPrincipal.main,
      }}>
      <Typography variant="h1" align="center" style={{ fontSize: "30px", marginBottom: "30px" }}>¡ Solicita tu Time Off !</Typography>
      {showWarning && (
        <Typography variant="body1" align="center" color="error" style={{ fontSize: "18px", marginBottom: "25px" }}>
          Completa todos los campos requeridos.
        </Typography>
      )}
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
            <Typography variant="h3" align="left" style={{ marginBottom: "10px" }}>Desde</Typography>
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
            <Typography variant="h3" align="left" style={{ marginBottom: "10px" }}>Hasta</Typography>
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
            <Typography onClick={openImageModal} style={{color:"blue", cursor:"pointer", textDecoration:"underline"}}>Información sobre permisos especiales</Typography>
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
            <Button variant="contained" onClick={handleCancel} style={{ backgroundColor: "white", color: "red" }}>
              Cancelar
            </Button>
          </Grid>
          <Grid item xs={6} align="center">
            <Button variant="contained" onClick={handleSubmit} style={{ backgroundColor: "red" }}>
              Solicitar
            </Button>
          </Grid>
        </Grid>
      </form>
      <Dialog open={isImageModalOpen} onClose={closeImageModal}>
      <DialogTitle>
          <IconButton
            color="inherit"
            onClick={closeImageModal}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <img src={permitsTable} alt="Imagen información permisos especiales" style={{maxWidth:"-webkit-fill-available"}}/>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={closeImageModal} style={{ backgroundColor: "red" }}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default TimeOffForm;


