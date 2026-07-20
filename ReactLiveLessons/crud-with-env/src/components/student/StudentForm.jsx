import React from "react";
import { addStudent, updateStudent } from "../../apiServices";
import { useState } from "react";

const StudentForm = ({ ref, setRef, studentToUpdate, setStudentToUpdate }) => {
    const [student, setStudent] = useState({
        id: "",
        roll: "",
        name: "",
        marks: "",
    });

    const handleChange = e => {
        const { name, value, type } = e.target;
        const parsedValue = type === "number" ? Number(value) : value;

        setStudent({ ...student, [name]: parsedValue });
    };

    const handleSubmit = e => {
        e.preventDefault();

        studentToUpdate
            ? updateStudent(student.id, student)
                  .then(res => {
                      setStudent({
                          id: "",
                          roll: "",
                          name: "",
                          marks: "",
                      });
                      setStudentToUpdate(null);
                      setRef(!ref);
                  })
                  .catch(err => {
                      console.log("Error in update : ", err);
                  })
            : addStudent(student)
                  .then(res => {
                      setStudent({
                          id: "",
                          name: "",
                          role: "",
                          salary: "",
                      });
                      setRef(!ref);
                  })
                  .catch(err => {
                      console.log("Error in add : ", err);
                  });
    };

    if (studentToUpdate && student.id !== studentToUpdate.id) {
        setStudent(studentToUpdate);
    }

    return (
        <div>
            <h3>Student {studentToUpdate ? "Update" : "Add"} Form</h3>

            <form onSubmit={handleSubmit}>
                {studentToUpdate && (
                    <>
                        ID : <input type="text" name="id" value={student.id} disabled />
                        <br />
                    </>
                )}
                Roll :{" "}
                <input
                    type="text"
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
                Marks :{" "}
                <input
                    type="number"
                    name="marks"
                    value={student.marks}
                    onChange={handleChange}
                    required
                />
                <br />
                <br />
                <button>{studentToUpdate ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};

export default StudentForm;
