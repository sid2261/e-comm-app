import React from 'react';
import AppBar from "@mui/material/AppBar";
import { Badge, Box, Button, IconButton, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { useSelector } from 'react-redux';
import { getItemCount } from '../utils';
import { styled, alpha } from '@mui/material/styles';
import Autocomplete from "@mui/material/Autocomplete";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const Search = styled("section")(({theme})=>({
  position:"relative",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover":{
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));
function SearchBar(){
  const products = useSelector((state) => state.products.value);
  return <Search>
    <Select size='small'>

    </Select>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Array.from(products, (prod) => ({ id:prod.id, label: prod.title }))}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} />}
      />
  </Search>
}


function Header() {
  const cartItems = useSelector((state)=>state.cart?.value);
  const count = getItemCount(cartItems);
  return (
    <AppBar position="sticky">
        <Toolbar>
            <Typography variant='h6'color="inherit">
                GrowMart
            </Typography>
            <SearchBar/>
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