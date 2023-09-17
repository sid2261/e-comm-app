import React from 'react';
import AppBar from "@mui/material/AppBar";
import { Badge, Box, Button, IconButton, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { useSelector } from 'react-redux';
import { getItemCount } from '../utils';


function Header() {
  const cartItems = useSelector((state)=>state.cart?.value);
  const count = getItemCount(cartItems)
  return (
    <AppBar position="sticky">
        <Toolbar>
            <Typography 
                variant='h6'
                color="inherit"
                sx={{flexGrow: 1}}
            >
                GrowMart
            </Typography>
            <Box sx={{display: {xs:"none", md:"flex"}}}>
            <IconButton size="large" aria-label="shows cart items count" color="inherit">
              <Badge badgeContent={count} color = "error">
                   <ShoppingCartSharpIcon/>
              </Badge>
            </IconButton>
            </Box>
            <Button color='inherit'>Login</Button>
        </Toolbar>
    </AppBar>
  )
}

export default Header
