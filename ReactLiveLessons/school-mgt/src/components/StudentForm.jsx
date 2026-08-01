import React, { useState } from "react";
import { addStudent, updateStudent } from "../apiService";

const StudentForm = ({ ref, setRef, updatingStudent, setUpdatingStudent }) => {
    const [student, setStudent] = useState({
        id: "",
        name: "",
        age: "",
        gender: "male",
        division: "A",
        favoriteGames: [],
    });

    const handleSubmit = e => {
        e.preventDefault();

        updatingStudent
            ? updateStudent(student.id, student)
                  .then(res => {
                      setStudent({
                          id: "",
                          name: "",
                          age: "",
                          gender: "male",
                          division: "A",
                          favoriteGames: [],
                      });
                      setUpdatingStudent(null);
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
                          age: "",
                          gender: "male",
                          division: "A",
                          favoriteGames: [],
                      });
                      setRef(!ref);
                  })
                  .catch(err => {
                      console.log("Error in add : ", err);
                  });
    };

    const handleChange = event => {
        const { name, value, checked, type } = event.target;

        if (type === "checkbox") {
            setStudent(currentStudent => ({
                ...currentStudent,
                [name]: checked
                    ? [...currentStudent[name], value]
                    : currentStudent[name].filter(game => game !== value),
            }));
        } else {
            const parsedValue = type === "number" ? Number(value) : value;
            setStudent(currentStudent => ({
                ...currentStudent,
                [name]: parsedValue,
            }));
        }
    };

    if (updatingStudent && student.id !== updatingStudent.id) {
        setStudent(updatingStudent);
    }

    return (
        <div>
            <h3>Student Form</h3>

            <form onSubmit={handleSubmit}>
                {updatingStudent && (
                    <>
                        ID :{" "}
                        <input
                            type="text"
                            name="id"
                            value={student.id}
                            disabled={updatingStudent}
                        />
                        <br />
                    </>
                )}
                Name :{" "}
                <input
                    type="text"
                    name="name"
                    value={student.name}
                    onChange={handleChange}
                    required
                />
                <br />
                Age :{" "}
                <input
                    type="number"
                    name="age"
                    value={student.age}
                    onChange={handleChange}
                    required
                />
                <br />
                <label>
                    Gender : Male
                    <input
                        type="radio"
                        value="male"
                        name="gender"
                        checked={student.gender === "male"}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Female
                    <input
                        type="radio"
                        value="female"
                        name="gender"
                        checked={student.gender === "female"}
                        onChange={handleChange}
                    />
                </label>
                <br />
                Division :{" "}
                <select
                    name="division"
                    id="division"
                    value={student.division}
                    onChange={handleChange}
                    required>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <br />
                Favorite Games :<label htmlFor="cricket">Cricket</label>
                <input
                    type="checkbox"
                    id="cricket"
                    name="favoriteGames"
                    value="cricket"
                    checked={student.favoriteGames.includes("cricket")}
                    onChange={handleChange}
                />
                <label htmlFor="football">Football</label>
                <input
                    type="checkbox"
                    id="football"
                    name="favoriteGames"
                    value="football"
                    checked={student.favoriteGames.includes("football")}
                    onChange={handleChange}
                />
                <label htmlFor="hockey">Hockey</label>
                <input
                    type="checkbox"
                    id="hockey"
                    name="favoriteGames"
                    value="hockey"
                    checked={student.favoriteGames.includes("hockey")}
                    onChange={handleChange}
                />
                <br />
                <br />
                <button type="submit">{updatingStudent ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};

export default StudentForm;
