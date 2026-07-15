let allEmployees = [
    { id: 1, name: "Rahul", role: "Developer", salary: 50000 },
    { id: 2, name: "Priya", role: "Tester", salary: 60000 },
    { id: 3, name: "Amit", role: "Consulting", salary: 45000 },
];

export const getAllEmployees = () => {
    return allEmployees;
};

export const addEmployee = emp => {
    allEmployees = [...allEmployees, emp];
};

export const deleteEmployee = id => {
    if (confirm("Delete this employee?")) {
        allEmployees = allEmployees.filter(emp => emp.id !== id);
    }
};

export const updateEmployee = updatedEmp => {
    allEmployees = allEmployees.map(emp => (emp.id !== updatedEmp.id ? emp : updatedEmp));
};
