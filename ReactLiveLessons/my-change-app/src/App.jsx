import React, { useState } from "react";
import NameSetter from "./components/NameSetter";
import StudentProfile from "./components/StudentProfile";
import LiveCharacterCounter from "./components/LiveCharacterCounter";
import LiveClickCounter from "./components/LiveClickCounter";
import ColorPreview from "./components/ColorPreview";
import CricketScore from "./components/CricketScore";
import VolumeController from "./components/VolumeController";
import PasswordLengthChecker from "./components/PasswordLengthChecker";
import MoodChanger from "./components/MoodChanger";
import LiveIDCard from "./components/LiveIDCard";

const App = () => {
    const [currentComponent, setCurrentComponent] = useState("HOME");

    const renderComponent = () => {
        switch (currentComponent) {
            case "NameSetter":
                return <NameSetter onViewChange={setCurrentComponent} />;

            case "StudentProfile":
                return <StudentProfile onViewChange={setCurrentComponent} />;

            case "LiveCharacterCounter":
                return <LiveCharacterCounter onViewChange={setCurrentComponent} />;

            case "ColorPreview":
                return <ColorPreview onViewChange={setCurrentComponent} />;

            case "LiveClickCounter":
                return <LiveClickCounter onViewChange={setCurrentComponent} />;

            case "CricketScore":
                return <CricketScore onViewChange={setCurrentComponent} />;

            case "VolumeController":
                return <VolumeController onViewChange={setCurrentComponent} />;

            case "MoodChanger":
                return <MoodChanger onViewChange={setCurrentComponent} />;

            case "PasswordLengthChecker":
                return <PasswordLengthChecker onViewChange={setCurrentComponent} />;

            case "LiveIDCard":
                return <LiveIDCard onViewChange={setCurrentComponent} />;

            default:
                return (
                    <div>
                        <h1>React Components</h1>

                        <button onClick={() => setCurrentComponent("NameSetter")}>
                            Name Setter
                        </button>

                        <br />
                        <br />

                        <button onClick={() => setCurrentComponent("StudentProfile")}>
                            Student Profile
                        </button>

                        <br />
                        <br />

                        <button
                            onClick={() => setCurrentComponent("LiveCharacterCounter")}>
                            Live Character Counter
                        </button>

                        <br />
                        <br />

                        <button onClick={() => setCurrentComponent("ColorPreview")}>
                            Color Preview
                        </button>

                        <br />
                        <br />

                        <button onClick={() => setCurrentComponent("LiveClickCounter")}>
                            Live Click Counter
                        </button>

                        <br />
                        <br />

                        <button onClick={() => setCurrentComponent("CricketScore")}>
                            Cricket Score
                        </button>

                        <br />
                        <br />

                        <button onClick={() => setCurrentComponent("VolumeController")}>
                            Volume Controller
                        </button>

                        <br />
                        <br />

                        <button onClick={() => setCurrentComponent("MoodChanger")}>
                            Mood Changer
                        </button>

                        <br />
                        <br />

                        <button
                            onClick={() => setCurrentComponent("PasswordLengthChecker")}>
                            Password Length Checker
                        </button>

                        <br />
                        <br />

                        <button onClick={() => setCurrentComponent("LiveIDCard")}>
                            Live ID Card
                        </button>
                    </div>
                );
        }
    };

    return (
        <center>
            <div>{renderComponent()}</div>
        </center>
    );
};

export default App;
