import React, { useState } from "react";

const MoodChanger = ({ onViewChange }) => {
    const [mood, setMood] = useState("");

    const handleClick = e => {
        switch (e.target.id) {
            case "happy":
                setMood("😄");
                break;

            case "sad":
                setMood("😔");
                break;

            case "angry":
                setMood("😡");
                break;

            case "love":
                setMood("🥰");
                break;

            default:
                setMood("");
                break;
        }
    };

    return (
        <div>
            <center>
                <h1>Mood Changer Component</h1>

                <h2>Current Mood : {mood}</h2>
                <button id="happy" onClick={handleClick}>
                    Happy 😄
                </button>
                <button id="sad" onClick={handleClick}>
                    Sad 😔
                </button>
                <button id="angry" onClick={handleClick}>
                    Angry 😡
                </button>
                <button id="love" onClick={handleClick}>
                    Love 🥰
                </button>

                <br />
                <br />
                <button onClick={() => onViewChange("HOME")}>Back to Home</button>
            </center>
        </div>
    );
};

export default MoodChanger;
