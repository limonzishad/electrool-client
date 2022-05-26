import React from "react";
import useOrder from "../../../hooks/useOrder";

const ManageOrders = () => {
    const [orders] = useOrder();
    let serial = 1;
    // const handelStatus = (id) => {
    //     const url = `https://murmuring-ocean-75671.herokuapp.com/order/${id}`;
    //     fetch(url, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             const remainingOrders = orders.filter(order => order._id !== id);
    //             setOrder(remainingOrders);
    //         });
    // };

    return (
        <div>
            <h1 className="text-center font-medium text-lg">MY ORDERS</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>PRODUCT ID</th>
                            <th className="text-center">ORDER QUANTITY</th>
                            <th className="text-center"></th>
                            <th className="text-center"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <tr key={order._id}>
                                    <th>{serial++}</th>
                                    <td>{order._id}</td>
                                    <td className="text-center">{order.orderQuantity}</td>
                                    <td>
                                        <label htmlFor="shipped-modal" className="btn bg-green-600 modal-button">SHIPPED</label>
                                        <input type="checkbox" id="shipped-modal" className="modal-toggle" />
                                        <div className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">
                                                <label htmlFor="shipped-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                <h3 className="font-bold text-lg">Are you sure you want to change order status?</h3>
                                                <div className="modal-action">
                                                    <button htmlFor="shipped-modal" className="btn modal-button btn-outline hover:bg-green-600">CONFIRM</button>
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

export default ManageOrders;