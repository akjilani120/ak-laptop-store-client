import React, { useEffect, useState } from 'react';

const UseDataCustom = () => {
    const [products, setProducts] = useState([])
   
    useEffect(() => {
        fetch("https://secure-hollows-88754.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts]
};

export default UseDataCustom;