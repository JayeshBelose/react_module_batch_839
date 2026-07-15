import React, { useEffect, useState } from "react";
import { deleteStudent, getAllStudents } from "../assets/studentData";

const StudentTable = ({ ref, setRef, setUpdatingStudent }) => {
    const [allStudents, setAllStudents] = useState([]);

    useEffect(() => {
        setAllStudents(getAllStudents());
    }, [ref]);

    const handleDelete = roll => {
        if (confirm("Delete this student?")) {
            deleteStudent(roll);
            setRef(!ref);
        }
    };

    return (
        <div>
            <h2>Student Table</h2>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Roll No.</th>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allStudents.map(std => (
                        <tr key={std.roll}>
                            <td>{std.roll}</td>
                            <td>{std.name}</td>
                            <td>{std.marks}</td>
                            <td>
                                <button onClick={() => handleDelete(std.roll)}>
                                    Delete
                                </button>
                                <button onClick={() => setUpdatingStudent(std)}>
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
