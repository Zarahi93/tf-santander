import Calendar from "./Calendar"
import TimeOffForm from "./Form"
import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Container,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Importa el ícono de cierre



export const Timeoff = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Calendar/>
      <Button variant="contained" style={{backgroundColor:"red"}} onClick={handleOpen}>
        Agendar Time Off
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
          <IconButton
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Container maxWidth="lg">
            <TimeOffForm onCancel={handleClose}/>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  )
}