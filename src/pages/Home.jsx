import { useTheme } from '@emotion/react';
import { ShoppingCartSharp } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Icon, IconButton, Rating, Typography } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../feature/cart-slice';
import { fetchAllProducts } from '../feature/product-slice';

function Home() {
    const theme = useTheme();
    const state = useSelector(state => state.products);
    const {value:products, loading} = state ?? {};
    const dispatch = useDispatch();

    if(!products?.length){
        dispatch(fetchAllProducts());
    }

    function addProductToCart(product){
        //dispatch an action
        dispatch(addToCart({product, quantity:1}));
    }

    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={4}>
                {products?.map(({title, id, price, description, rating, image}) => (
                    <Grid item key={id} xs={12} sm={6} md={3}>
                        <Card sx={{height: "100%", display: "flex", flexDirection: "column"}}>
                            <CardMedia component="img" sx={{alignSelf: "center", width:theme.spacing(30), height: theme.spacing(30), objectFit:"contain", pt:theme.spacing()}} 
                            image={image} 
                            alt={title}
                            />
                            <CardContent>
                                <Typography variant='h5' component="h2" gutterBottom sx={{
                                    overflow:"hidden",
                                    textOverflow:"ellipsis",
                                    display:"-webkit-box",
                                    "-webkit-line-clamp":"1",
                                    "-webkit-box-orient":"vertical",
                                }}>
                                    {title}
                                </Typography>
                                <Typography 
                                color="text.secondary"
                                paragraph
                                sx={{
                                    overflow:"hidden",
                                    textOverflow:"ellipsis",
                                    display:"-webkit-box",
                                    "-webkit-line-clamp":"2",
                                    "-webkit-box-orient":"vertical",
                                }}
                                >{description}</Typography>
                                <Typography fontSize="large" paragraph >
                                    {price}
                                </Typography>
                                <Rating readOnly precision={0.5} value={rating.rate} />
                            </CardContent>
                            <CardActions sx={{
                                alignSelf:"center"
                            }}>
                                <Button variant='contained' onClick={()=>addProductToCart(title, id, price, description, rating, image)}>
                                    <ShoppingCartSharp/>
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
    }

export default Home