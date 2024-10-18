import React, {FC} from 'react';
import {IProduct} from "../../models/IProduct";
import {Link} from "react-router-dom";
import styles from './Product.module.css'
type ProductProps ={
    item:IProduct
}
const Product:FC<ProductProps> = ({item}) => {
    return (
        <div className={styles.product}>
            <h4>{item.title}</h4>
            <img src={item.thumbnail} alt={item.title}/>
            {<Link state={{data: item}} to={item.id.toString()}>
                <button>Product details</button>
            </Link>}
        </div>
    );
};

export default Product;

