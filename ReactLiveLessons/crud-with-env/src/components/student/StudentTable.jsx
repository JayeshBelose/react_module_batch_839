import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { deleteStudentById, getAllStudents } from "../../apis/studentApi";

const StudentTable = ({ ref, setRef, setStudentToUpdate }) => {
    const [allStudents, setAllStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const { data } = await getAllStudents();
            setAllStudents(data);
        };
        fetchStudents();
    }, [ref]);

    const handleDelete = id => {
        if (confirm("Delete this student?")) {
            deleteStudentById(id)
                .then(res => {
                    setRef(!ref);
                })
                .catch(err => {
                    console.log("Error in Delete : ", err);
                });
        }
    };

    return (
        <div>
            <h3>Student Table</h3>

            <table border={2}>
                <thead>
                    <tr>
                        <th>Roll No.</th>
                        <th>Name</th>
                        <th>Makrks</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allStudents.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.roll}</td>
                            <td>{emp.name}</td>
                            <td>{emp.marks}</td>
                            <td>
                                <button onClick={() => handleDelete(emp.id)}>
                                    Delete
                                </button>
                                <button onClick={() => setStudentToUpdate(emp)}>
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
