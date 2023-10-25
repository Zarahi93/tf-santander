import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../Assets/Imgs/logo.png"

function Header() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const openMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor:"white", padding:"15px" }}>
      <Toolbar>
        <img
          src={logo}
          alt="Logo de la empresa"
          style={{ maxWidth: '25vh' }} // Establece el ancho máximo del logo
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* Título o texto opcional del encabezado */}
        </Typography>
        <IconButton
          color="inherit"
          edge="end"
          aria-label="menu"
          onClick={openMenu}
          sx={{ color: 'red' }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={closeMenu}
        >
          <MenuItem onClick={closeMenu}>Home</MenuItem>
          <MenuItem onClick={closeMenu}>Time Off</MenuItem>
          <MenuItem onClick={closeMenu}>Ayuda</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
