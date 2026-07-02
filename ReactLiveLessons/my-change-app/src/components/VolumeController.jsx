import React, { useState } from "react";

const VolumeController = ({ onViewChange }) => {
    const [volume, setVolume] = useState(50);

    const handleClick = e => {
        switch (e.target.id) {
            case "inc":
                if (volume === 100) {
                    alert("Volume can't be above 100.");
                    break;
                }
                setVolume(volume + 10);
                break;

            case "dec":
                if (volume === 0) {
                    alert("Volume can't be below 0.");
                    break;
                }
                setVolume(volume - 10);
                break;

            default:
                setVolume(0);
                break;
        }
    };

    return (
        <div>
            <center>
                <h1>Volume Controller Component</h1>
                <h2>Volume : {volume}</h2>
                <button id="inc" onClick={handleClick}>
                    Increase
                </button>
                <button onClick={handleClick}>Mute</button>
                <button id="dec" onClick={handleClick}>
                    Decrease
                </button>

                <br />
                <br />
                <button onClick={() => onViewChange("HOME")}>Back to Home</button>
            </center>
        </div>
    );
};

export default VolumeController;
