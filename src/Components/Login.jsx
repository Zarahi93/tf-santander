import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    }

    return (
        <div>
      <Stack spacing={2} direction="row">
      <Button variant="contained">Login</Button>
      <Button variant="outlined" onClick={handleClick}>Home</Button>
    </Stack>
        </div>
    );
}

export default Login;