import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Feedback from '../Components/Home/Feedback'
import Content from "../Components/Home/Content";
import { Box, Typography, Grid } from '@mui/material';
import { getPersonalInfo, getLaborData } from "../Services/authService";
import CourseBalance from './Home/CourseBalance';
import Benefits from './Home/Benefits';
import Header from "./Header"
import Footer from "./Footer"
import Notifications from './Home/Notifications';

const date = new Date().toLocaleDateString('es-ES', { weekday:"long", year:"numeric", month:"long", day:"numeric"});
const firstLetter = date.charAt(0);
const rest = date.slice(1);
const dateToday = firstLetter.toUpperCase() + rest;
  
const name = getPersonalInfo().full_name.split(' ')[0];
const stack = getLaborData().job_title;

export default function Home() {
    const navigate = useNavigate();

    return (
        <div
            style={{
                height: '100vh',
            }}
        >
            <Header />
            <Box sx={{ maxWidth: '90%', m: 'auto', pb: 7}}>
                <Grid container columnSpacing={3} >
                    <Grid item xs={12} sm={6} md={5}>
                            <Box pb={3} pt={3}>
                                <Typography variant='h1'color='#ec0000'>¡Hola {name}!</Typography>
                                <Typography variant='p4'>{stack}</Typography>   
                            </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={7}>
                        <Typography pb={3} pt={3} align='right' >{`${dateToday}`}</Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Content />
                        <CourseBalance />
                        <Benefits />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Notifications />
                        <Feedback />
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </div>
    );
}
