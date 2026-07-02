import React, { useState } from "react";

const CricketScore = ({ onViewChange }) => {
    const [score, setScore] = useState(0);

    const handleClick = e => {
        switch (e.target.id) {
            case "1":
                setScore(score + 1);
                break;

            case "2":
                setScore(score + 2);
                break;

            case "4":
                setScore(score + 4);
                break;

            case "6":
                setScore(score + 6);
                break;

            default:
                setScore(0);
                break;
        }
    };

    return (
        <div>
            <center>
                <h1>Cricket Score Component</h1>

                <h2>Current Score : {score}</h2>

                <button id="1" onClick={handleClick}>
                    +1
                </button>

                <button id="2" onClick={handleClick}>
                    +2
                </button>

                <button id="4" onClick={handleClick}>
                    +4
                </button>

                <button id="6" onClick={handleClick}>
                    +6
                </button>

                <button id="reset" onClick={handleClick}>
                    Reset
                </button>

                <br />
                <br />
                <button onClick={() => onViewChange("HOME")}>Back to Home</button>
            </center>
        </div>
    );
};

export default CricketScore;
