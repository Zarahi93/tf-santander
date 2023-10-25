import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/timeoff");
    }

    const goLogin = () => {
        navigate("/");
    }

    return (
        <div>
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={goLogin}>Login</Button>
                <Button variant="outlined" onClick={handleClick}>Time off</Button>
            </Stack>
        </div>
    );
}

export default Home;