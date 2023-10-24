import Calendar from "./Calendar"
import TimeOffForm from "./Form"
import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Container,
} from '@mui/material';


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
      <Button variant="contained"style={{backgroundColor:"red"}} onClick={handleOpen}>
        Agendar Time Off
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Container maxWidth="lg">
            <TimeOffForm />
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  )
}