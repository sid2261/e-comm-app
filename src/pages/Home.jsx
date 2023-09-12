import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetchAllProducts()
        async function fetchAllProducts(){
            const response = await fetch("https://fakestoreapi.com/products");
            const result = await response.json();
            setProducts(result)
        }
    }, [])
    return (
        <div>
            <pre>{JSON.stringify(products, null, 2)}</pre>
        </div>
    )
    }

export default Home