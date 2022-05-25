import React from "react";
import useProduct from "../../../hooks/useProduct";

const ManageProducts = () => {
    const [products, setProduct] = useProduct();
    let serial = 1;
    const deleteProduct = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProduct(remainingProducts);
                });
        }
    };

    return (
        <div>
            <h1 className="text-center font-medium text-lg">MANAGE PRODUCTS</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>TOOL NAME</th>
                            <th className="text-center">QUANTITY</th>
                            <th className="text-center">PRICE (PER UNIT)</th>
                            <th className="text-center">AVAILABILITY</th>
                            <th className="text-center"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product =>
                                <tr key={product._id}>
                                    <th>{serial++}</th>
                                    <td>{product.name}</td>
                                    <td className="text-center">{product.quantity}</td>
                                    <td className="text-center">{product.pricePerUnit}</td>
                                    <td className="text-center">{product.availability}</td>
                                    <td><button onClick={() => { deleteProduct(product._id) }} className="btn btn-circle btn-outline hover:bg-red-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;