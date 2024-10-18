import React from 'react';
import {useLocation} from "react-router-dom";
import { IProduct} from "../models/IProduct";

const ProductDetailsPage = () => {

    let {state:{data}} = useLocation();
    const product:IProduct =data

    return (
        <div>
            <h3>{product.title}</h3>
            <ul>
                <li>id:{product.id}</li>
                <li>description:{product.description}</li>
                <li>category:{product.category}</li>
                <li>price:{product.price}</li>
                <li>discountPercentage:{product.discountPercentage}</li>
                <li>rating{product.rating}</li>
                <li>stock:{product.stock}</li>
                <li>tags:{product.tags}</li>
                <li>brand:{product.brand}</li>
                <li>sku:{product.sku}</li>
                <li>weight:{product.weight}</li>
                <li>dimensions:
                    <ol>
                        <li>width:{product.dimensions.width}</li>
                        <li>height:{product.dimensions.height}</li>
                        <li>depth:{product.dimensions.depth}</li>
                    </ol>
                </li>
                <li>warrantyInformation:{product.warrantyInformation}</li>
                <li>shippingInformation:{product.shippingInformation}</li>
                <li>availabilityStatus:{product.availabilityStatus}</li>


            </ul>
            <img src={product.thumbnail} alt={product.title}/>
        </div>
    );
};

export default ProductDetailsPage;