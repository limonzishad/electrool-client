import React from "react";
import useOrder from "../../../hooks/useOrder";

const MyOrders = () => {
    const [orders, setOrder] = useOrder();
    let serial = 1;
    const cancelOrder = (id) => {
        const url = `https://murmuring-ocean-75671.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remainingOrders = orders.filter(order => order._id !== id);
                setOrder(remainingOrders);
            });
    };

    return (
        <div>
            <h1 className="text-center font-medium text-lg">MY ORDERS</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>PRODUCT NAME</th>
                            <th className="text-center">ORDER QUANTITY</th>
                            <th className="text-center">PRICE (PER UNIT)</th>
                            <th className="text-center"></th>
                            <th className="text-center"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <tr key={order._id}>
                                    <th>{serial++}</th>
                                    <td>{order.productName}</td>
                                    <td className="text-center">{order.orderQuantity}</td>
                                    <td className="text-center">{order.productPricePerUnit}</td>
                                    <td>
                                        <label htmlFor="delete-modal" className="btn bg-red-600 modal-button">DELETE</label>
                                        <input type="checkbox" id="delete-modal" className="modal-toggle" />
                                        <div className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">
                                                <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                <h3 className="font-bold text-lg">Are you sure want to cancel this order?</h3>
                                                <div className="modal-action">
                                                    <button htmlFor="delete-modal" onClick={() => { cancelOrder(order._id) }} className="btn modal-button btn-outline hover:bg-red-600">CANCEL ORDER</button>
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

export default MyOrders;