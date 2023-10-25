import React from 'react';
import { Container, Typography, Divider, Grid } from '@mui/material';

function VacationInfoTable() {
    return (
        <Container>
            <Typography variant="h1" align="center" style={{ fontSize: "40px" }}>23</Typography>
            <Typography variant="h2" align="center" style={{ fontSize: "20px", marginBottom: "30px" }}>Días Disponibles</Typography>
            <Divider style={{ margin: '20px 0' }} />

            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant="body1" style={{ fontSize: "15px" }}>Saldo de arrastre de vacaciones:</Typography>
                </Grid>
                <Grid item xs={4} align="center">
                    <Typography variant="body1" style={{ fontSize: "15px" }}>8</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body1" style={{ fontSize: "15px" }}>Días de vacaciones del año actual:</Typography>
                </Grid>
                <Grid item xs={4} align="center">
                    <Typography variant="body1" style={{ fontSize: "15px" }}>15</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body1" style={{ fontSize: "15px" }}>Saldo total de vacaciones:</Typography>
                </Grid>
                <Grid item xs={4} align="center">
                    <Typography variant="body1" style={{ fontSize: "15px" }}>23</Typography>
                </Grid>
            </Grid>

            <Divider style={{ margin: '20px 0' }} />

            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant="body1" style={{ fontSize: "15px" }}>Ausencias utilizadas:</Typography>
                </Grid>
                <Grid item xs={4} align="center">
                    <Typography variant="body1" style={{ fontSize: "15px" }}>1</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body1" style={{ fontSize: "15px" }}>Saldo de ausencias disponibles:</Typography>
                </Grid>
                <Grid item xs={4} align="center">
                    <Typography variant="body1" style={{ fontSize: "15px" }}>1</Typography>
                </Grid>
            </Grid>

            <Divider style={{ margin: '20px 0' }} />

            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant="body1" style={{ fontSize: "15px" }}>Días de permisos especiales utilizados:</Typography>
                </Grid>
                <Grid item xs={4} align="center">
                    <Typography variant="body1" style={{ fontSize: "15px" }}>3</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default VacationInfoTable;
