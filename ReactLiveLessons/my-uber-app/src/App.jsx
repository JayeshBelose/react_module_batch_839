import React, { useState } from "react";
import OrderForm from "./components/OrderForm";
import OrderTable from "./components/OrderTable";

const App = () => {
    const [ref, setRef] = useState(true);
    const [updatingOrder, setUpdatingOrder] = useState(null);

    return (
        <div>
            <center>
                <h1>Order Management</h1>

                <OrderForm
                    ref={ref}
                    setRef={setRef}
                    updatingOrder={updatingOrder}
                    setUpdatingOrder={setUpdatingOrder}
                />
                <OrderTable
                    ref={ref}
                    setRef={setRef}
                    setUpdatingOrder={setUpdatingOrder}
                />
            </center>
        </div>
    );
};

export default App;
