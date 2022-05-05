import React, { useEffect, useState } from 'react';

const UseDataCustom = () => {
    const [products, setProducts] = useState([])
   
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products]
};

export default UseDataCustom;