import React, {useEffect, useState} from 'react';
import {getProducts} from "../../servises/api.service";
import {IProduct} from "../../models/IProduct";
import Product from "../product/product";
import styles from "./Products.module.css"

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(()=>{
        getProducts().then(value =>setProducts(value) )
    },[])





    return (
        <div className={styles.products}>
            {
                products.map((product:IProduct)=> <Product item={product } key={product.id}/>  )
            }
        </div>
    );
};

export default Products;