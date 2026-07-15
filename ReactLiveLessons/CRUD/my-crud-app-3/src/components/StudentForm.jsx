import React, { useState } from "react";
import { addStudent, updateStudent } from "../assets/studentData";

const StudentForm = ({ ref, setRef, updatingStudent, setUpdatingStudent }) => {
    const [student, setStudent] = useState({
        roll: "",
        name: "",
        marks: "",
    });

    const handleSubmit = e => {
        e.preventDefault();

        updatingStudent ? updateStudent(student) : addStudent(student);

        setRef(!ref);
        setStudent({
            roll: "",
            name: "",
            marks: "",
        });
        setUpdatingStudent(null);
    };

    const handleChange = e => {
        const { name, value, type } = e.target;
        const parsedValue = type === "number" ? Number(value) : value;

        setStudent({ ...student, [name]: parsedValue });
    };

    if (updatingStudent && student.roll !== updatingStudent.roll) {
        setStudent(updatingStudent);
    }

    return (
        <div>
            <h2>Student Form</h2>

            <form onSubmit={handleSubmit}>
                Roll No. :{" "}
                <input
                    type="number"
                    name="roll"
                    value={student.roll}
                    onChange={handleChange}
                    required
                    disabled={updatingStudent}
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
                Marks :{" "}
                <input
                    type="number"
                    name="marks"
                    value={student.marks}
                    onChange={handleChange}
                    required
                />
                <br />
                <button type="submit">{updatingStudent ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};

export default StudentForm;
