let allStudents = [
    {
        roll: 1,
        name: "jayesh",
        marks: 80.0,
    },
    {
        roll: 2,
        name: "yash",
        marks: 83.24,
    },
    {
        roll: 3,
        name: "neha",
        marks: 81.0,
    },
];

export const getAllStudents = () => {
    return allStudents;
};

export const deleteStudent = roll => {
    allStudents = allStudents.filter(std => std.roll !== roll);
};

export const addStudent = student => {
    allStudents = [...allStudents, student];
};

export const updateStudent = updatedStudent => {
    allStudents = allStudents.map(std =>
        std.roll !== updatedStudent.roll ? std : updatedStudent,
    );
};
