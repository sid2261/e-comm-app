import React from 'react';
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";


function Header() {
  return (
    <AppBar>
        <Toolbar>
            <Typography>
                Ecomm
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header
