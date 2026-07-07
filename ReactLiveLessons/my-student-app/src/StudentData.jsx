import React, { useState } from "react";

const StudentData = () => {
    const [allStudents, setAllStudent] = useState([
        {
            roll: 1,
            name: "Jayesh",
            house: "A",
            address: "Pune",
            maths: 80,
            english: 75,
            science: 69,
        },
        {
            roll: 2,
            name: "Yash",
            house: "A",
            address: "Pune",
            maths: 88,
            english: 80,
            science: 75,
        },
    ]);
    const [student, setStudent] = useState({
        roll: "",
        name: "",
        house: "",
        address: "",
        maths: "",
        english: "",
        science: "",
    });

    const handleChange = e => {
        let { name, value, type } = e.target;

        const parsedValue = type === "number" ? Number(value) : value;

        setStudent({
            ...student,
            [name]: parsedValue,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setAllStudent([...allStudents, student]);
        setStudent({
            roll: "",
            name: "",
            house: "",
            address: "",
            maths: "",
            english: "",
            science: "",
        });
    };

    const getPercentage = stud => {
        return (((stud.maths + stud.english + stud.science) / 300) * 100).toFixed(2);
    };

    const getTotalMarks = stud => {
        return stud.maths + stud.english + stud.science;
    };

    return (
        <div>
            <center>
                <h1>Add Student Form</h1>
                <form onSubmit={handleSubmit}>
                    Roll No. :{" "}
                    <input
                        type="number"
                        name="roll"
                        value={student.roll}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    Name :{" "}
                    <input
                        type="text"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    House :{" "}
                    <input
                        type="text"
                        name="house"
                        value={student.house}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    Address :{" "}
                    <input
                        type="text"
                        name="address"
                        value={student.address}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    Maths Marks :{" "}
                    <input
                        type="number"
                        name="maths"
                        value={student.maths}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    English Marks :{" "}
                    <input
                        type="number"
                        name="english"
                        value={student.english}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    Science Marks :{" "}
                    <input
                        type="number"
                        name="science"
                        value={student.science}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <br />
                    <button type="submit">Add</button>
                </form>

                <h1>Student Data</h1>
                <table border={2}>
                    <thead>
                        <tr>
                            <th>Roll No.</th>
                            <th>Name</th>
                            <th>House</th>
                            <th>Address</th>
                            <th>Maths</th>
                            <th>English</th>
                            <th>Science</th>
                            <th>Total</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allStudents.map(stud => (
                            <tr key={stud.roll}>
                                <td>{stud.roll}</td>
                                <td>{stud.name}</td>
                                <td>{stud.house}</td>
                                <td>{stud.address}</td>
                                <td>{stud.maths}</td>
                                <td>{stud.english}</td>
                                <td>{stud.science}</td>
                                <td>{getTotalMarks(stud)}/300</td>
                                <td>{getPercentage(stud)}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
    );
};

export default StudentData;
