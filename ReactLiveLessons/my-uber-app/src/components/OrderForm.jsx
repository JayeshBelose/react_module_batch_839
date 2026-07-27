import React, { useState } from "react";
import { addOrder, updateOrder } from "../apiServices";

const OrderForm = ({ ref, setRef, updatingOrder, setUpdatingOrder }) => {
    const [order, setOrder] = useState({
        id: "",
        customer: "",
        from: "",
        to: "",
    });

    const handleChange = e => {
        const { name, value, type } = e.target;
        const parsedValue = type === "number" ? Number(value) : value;

        setOrder({ ...order, [name]: parsedValue });
    };

    const handleSubmit = e => {
        e.preventDefault();

        updatingOrder
            ? updateOrder(order.id, order)
                  .then(res => {
                      setOrder({
                          id: "",
                          customer: "",
                          from: "",
                          to: "",
                      });
                      setUpdatingOrder(null);
                      setRef(!ref);
                  })
                  .catch(err => {
                      console.log("Error in update : ", err);
                  })
            : addOrder(order)
                  .then(res => {
                      setOrder({
                          id: "",
                          customer: "",
                          from: "",
                          to: "",
                      });
                      setRef(!ref);
                  })
                  .catch(err => {
                      console.log("Error in add : ", err);
                  });
    };

    if (updatingOrder && order.id !== updatingOrder.id) {
        setOrder(updatingOrder);
    }

    return (
        <div>
            <h2>Order {updatingOrder ? "Update" : "Add"} Form</h2>

            <form onSubmit={handleSubmit}>
                {updatingOrder && (
                    <>
                        ID :{" "}
                        <input
                            type="text"
                            name="id"
                            value={order.id}
                            disabled={updatingOrder}
                        />
                        <br />
                    </>
                )}
                Customer :{" "}
                <input
                    type="text"
                    name="customer"
                    value={order.customer}
                    onChange={handleChange}
                    required
                />
                <br />
                From :{" "}
                <input
                    type="text"
                    name="from"
                    value={order.from}
                    onChange={handleChange}
                    required
                />
                <br />
                To :{" "}
                <input
                    type="text"
                    name="to"
                    value={order.to}
                    onChange={handleChange}
                    required
                />
                <br />
                <br />
                <button type="submit">{updatingOrder ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};

export default OrderForm;
