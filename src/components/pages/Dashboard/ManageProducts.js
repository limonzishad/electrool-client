import React from "react";
import useProduct from "../../../hooks/useProduct";

const ManageProducts = () => {
    const [products, setProduct] = useProduct();
    let serial = 1;
    const deleteProduct = (id) => {
        const url = `https://murmuring-ocean-75671.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remainingProducts = products.filter(product => product._id !== id);
                setProduct(remainingProducts);
            });
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
                                    <td>
                                        <label htmlFor="delete-modal" className="btn bg-red-600 modal-button">DELETE</label>
                                        <input type="checkbox" id="delete-modal" className="modal-toggle" />
                                        <div className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">
                                                <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                <h3 className="font-bold text-lg">Are you sure want to delete {product.name} ?</h3>
                                                <div className="modal-action">
                                                    <button htmlFor="delete-modal" onClick={() => { deleteProduct(product._id) }} className="btn modal-button btn-outline hover:bg-red-600">CONFIRM
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
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