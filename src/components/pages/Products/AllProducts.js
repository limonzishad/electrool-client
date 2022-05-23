import React from "react";
import setProduct from "../../../hooks/useProduct";
import Product from '../Products/Product';

const AllProducts = () => {
    const [products] = setProduct();
    return (
        <div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-base-200">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;