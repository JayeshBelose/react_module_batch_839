import React, { useEffect, useState } from "react";
import { deleteOrder, getAllOrders } from "../apiServices";

const OrderTable = ({ ref, setRef, setUpdatingOrder }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, [ref]);

    const fetchOrders = async () => {
        const { data } = await getAllOrders();
        setOrders(data);
    };

    const handleDelete = id => {
        if (confirm("Delete this order?")) {
            deleteOrder(id)
                .then(res => {
                    setRef(!ref);
                })
                .catch(err => {
                    console.log("Error in delete : ", err);
                });
        }
    };

    return (
        <div>
            <h2>Order Table</h2>

            <table border={2}>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map(o => (
                        <tr key={o.id}>
                            <td>{o.customer}</td>
                            <td>{o.from}</td>
                            <td>{o.to}</td>
                            <td>
                                <button onClick={() => handleDelete(o.id)}>Delete</button>
                                <button onClick={() => setUpdatingOrder(o)}>
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;
