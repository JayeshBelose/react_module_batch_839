import React, { useEffect, useState } from "react";
import { deleteStudent, getAllStudents } from "../apiService";

const StudentTable = ({ ref, setRef, setUpdatingStudent }) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const { data } = await getAllStudents();
            setStudents(data);
        };
        fetchStudents();
    }, [ref]);

    const handleDelete = id => {
        if (confirm("Delete this student?")) {
            deleteStudent(id)
                .then(res => {
                    setRef(!ref);
                })
                .catch(err => {
                    console.log("Error in delete : ", err);
                });
        }
    };

    return (
        <div>
            <h3>Student Table</h3>

            <table border={2}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Division</th>
                        <th>Favorite Games</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {students?.map(s => (
                        <tr key={s.id}>
                            <td>{s.name}</td>
                            <td>{s.age}</td>
                            <td>{s.gender}</td>
                            <td>{s.division}</td>
                            <td>{s.favoriteGames?.join(", ")}</td>
                            <td>
                                <button onClick={() => handleDelete(s.id)}>Delete</button>
                                <button onClick={() => setUpdatingStudent(s)}>
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
