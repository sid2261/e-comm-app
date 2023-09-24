import React from 'react';
import AppBar from "@mui/material/AppBar";
import { Badge, Box, Button, IconButton, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { useDispatch, useSelector } from 'react-redux';
import { getItemCount } from '../utils';
import { styled, alpha } from '@mui/material/styles';
import Autocomplete from "@mui/material/Autocomplete";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { fetchAllCategories } from '../feature/category-slice';
import { useState } from 'react';

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
  const categories = useSelector(state => state.categories?.value);
  const dispatch = useDispatch();
  const [selectedCategory,setselectedCategory] = useState("all");
  if (!categories.length){
    dispatch(fetchAllCategories())
  }
  function handleCategoryChange(event){
    const {value} = event.target;
    setselectedCategory(value);
  }
  return <Search>
    <Select
    value={selectedCategory}
    size='small'
    sx={{
      m:1,
      textTransform:"capitalize",
      "&" : {},
    }}
    variant='standard'
    labelId='selected-category'
    id='selected-category'
    onChange={handleCategoryChange}
    >
      <MenuItem sx={{
        textTransform:'capitalize'
      }}
      value="all">all</MenuItem>
      {categories?.map(category => (
      <MenuItem sx={{
        textTransform:'capitalize'
      }}
      key={category} value={category}>{category}
      </MenuItem>
      ))}
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