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
import HomeIcon from '@mui/icons-material/Home';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
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
    <AppBar position="static" style={{ backgroundColor: "white", padding: "15px" }}>
      <Toolbar>
        <img
          src={logo}
          alt="Logo de la empresa"
          style={{ maxWidth: '25vh' }}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
          <MenuItem onClick={closeMenu}>
            <HomeIcon sx={{ marginRight: 1, color:"red" }} />
            Home
          </MenuItem>
          <MenuItem onClick={closeMenu}>
            <AirplanemodeActiveIcon sx={{ marginRight: 1, color:"red" }} />
            Time Off
          </MenuItem>
          <MenuItem onClick={closeMenu}>
            <HelpOutlineIcon sx={{ marginRight: 1, color:"red" }} />
            Ayuda
          </MenuItem>
          <MenuItem onClick={closeMenu}>
            <LogoutOutlinedIcon sx={{ marginRight: 1, color:"red" }} />
            Cerrar Sesión
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
