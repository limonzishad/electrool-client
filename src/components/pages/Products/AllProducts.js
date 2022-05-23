import React from "react";
import setProduct from "../../../hooks/useProduct";
import Product from '../Products/Product';

const AllProducts = () => {
    const [products] = setProduct();
    return (
        <div>
            <h2 className="">ALL PRODUCTS</h2>
            <div className="">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;