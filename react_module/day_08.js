let employees = [
    { id: 1, name: "Amit", department: "React", salary: 18000 },
    { id: 2, name: "Rohit", department: "Java", salary: 35000 },
    { id: 3, name: "Priya", department: "React", salary: 22000 },
    { id: 4, name: "Sneha", department: "Python", salary: 45000 },
    { id: 5, name: "Karan", department: "React", salary: 15000 },
    { id: 6, name: "Neha", department: "Angular", salary: 25000 },
    { id: 7, name: "Vikas", department: "Java", salary: 120000 },
    { id: 8, name: "Pooja", department: "React", salary: 155000 },
    { id: 9, name: "Arjun", department: "Node", salary: 119000 },
    { id: 10, name: "Anjali", department: "React", salary: 125000 },
];
console.log("Employees : ", employees);

let reactDevs = employees.filter(emp => emp.department === "React");
console.log("React Devs : ", reactDevs);

let updatedEmployees = employees.map(emp => {
    if (emp.salary < 20000) {
        return {
            ...emp,
            salary: emp.salary * 1.15,
        };
    }
    return emp;
});
console.log("Salary Updated Employees : ", updatedEmployees);

let highSalaryEmployees = employees.filter(emp => emp.salary.toString().length > 5);
console.log("High Salary Employees : ", highSalaryEmployees);

let modifiedSalary = employees.map(emp => {
    if (emp.salary.toString().length > 5) {
        return {
            ...emp,
            salary: emp.salary - 100000,
        };
    }
    return emp;
});
console.log("Employees After Modifying Salary : ", modifiedSalary);
