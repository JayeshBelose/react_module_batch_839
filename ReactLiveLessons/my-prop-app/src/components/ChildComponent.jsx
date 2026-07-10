import React from "react";

const ChildComponent = ({ sendToParent }) => {
    return (
        <div>
            <button onClick={() => sendToParent("From Child")}>
                Send Message to Parent
            </button>
        </div>
    );
};

export default ChildComponent;
