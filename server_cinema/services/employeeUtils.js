const jsonfile = require("jsonfile");
const Employee = require("../models/employeeLoginModel");

const file = "./configs/employees.json";

const getEmployeeFile = () => {
    const file = "./configs/employees.json";
    return new Promise((resolve, reject) => {
        jsonfile.readFile(file, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const findEmployeeByID = async (id) => {
    const allEmployees = await getEmployeeFile();
    const employeeIndex = allEmployees.findIndex(employee => employee.id === id);
    return allEmployees[employeeIndex];
}

const findEmployeeIndexByID = async (id) => {
    const allEmployees = await getEmployeeFile();
    const employeeIndex = allEmployees.findIndex(employee => employee.id === id);
    return employeeIndex;
}

const addEmployeeToFile = async (newEmployee) => {
    let newestEmployee = await Employee.find({}).sort({ createdAt: -1 }).limit(1);
    newestEmployee = newestEmployee[0];
    const employeeToAdd = {
        id: newestEmployee._id,
        firstName: newEmployee.firstName,
        lastName: newEmployee.lastName,
        createdAt: newestEmployee.createdAt
    }
    let employeesOnFile = await getEmployeeFile();
    employeesOnFile.push(employeeToAdd);
    return new Promise((resolve, reject) => {
        jsonfile.writeFile(file, employeesOnFile, {spaces: 2}, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("New employee added successfully")
            }
        })
    })   
}

const editEmployeeInFile = async (id, updatedEmployee) => {
    let employeesOnFile = await getEmployeeFile();
    const employeeIndex = await findEmployeeIndexByID(id);
    employeesOnFile[employeeIndex] = {
        ...employeesOnFile[employeeIndex],
        firstName: updatedEmployee.firstName,
        lastName: updatedEmployee.lastName,
    }
    return new Promise((resolve, reject) => {
        jsonfile.writeFile(file, employeesOnFile, {spaces: 2}, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Edited employee on file")
            }
        })
    })
}

const removeEmployeeFromFile = async (id) => {
    let employeesOnFile = await getEmployeeFile();
    const employeeIndex = await findEmployeeIndexByID(id);
    employeesOnFile.splice(employeeIndex, 1);
    return new Promise((resolve, reject) => {
        jsonfile.writeFile(file, employeesOnFile, {spaces: 2}, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Employee removed from file")
            }
        })
    })
}

module.exports = { getEmployeeFile, addEmployeeToFile, editEmployeeInFile, removeEmployeeFromFile };