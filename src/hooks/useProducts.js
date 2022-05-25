import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return [products]
};

export default useProducts;