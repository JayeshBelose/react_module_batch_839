import React from "react";

const Modulo = props => {
    return (
        <div>
            <h2>Modulo : {props.modulo(props.x, props.y)}</h2>
        </div>
    );
};

export default Modulo;
