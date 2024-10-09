import React, {FC} from 'react';
import {IProductModel} from "../models/IProductModel";
type TypeProps ={item:IProductModel}
const Product:FC<TypeProps> = ({item}) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <ul>
                <li>id:{item.id}</li>
                <li>description:{item.description}</li>
                <li>category:{item.category}</li>
                <li>price:{item.price}</li>
                <li>discountPercentage:{item.discountPercentage}</li>
                <li>rating{item.rating}</li>
                <li>stock:{item.stock}</li>
                <li>tags:{item.tags}</li>
                <li>brand:{item.brand}</li>
                <li>sku:{item.sku}</li>
                <li>weight:{item.weight}</li>
                <li>dimensions:<ol>
                    <li>width:{item.dimensions.width}</li>
                    <li>height:{item.dimensions.height}</li>
                    <li>depth:{item.dimensions.depth}</li>
                </ol></li>
                <li>warrantyInformation:{item.warrantyInformation}</li>
                <li>shippingInformation:{item.shippingInformation}</li>
                <li>availabilityStatus:{item.availabilityStatus}</li>


            </ul>
            <img src={item.thumbnail} alt={item.title}/>
        </div>
    );
};

export default Product;