const Employee = require("../models/employeeLoginModel");
const { addEmployeeToFile, editEmployeeInFile, removeEmployeeFromFile } = require("../services/employeeUtils");
const { addPermissionsToFile, editPermissionsInFile, removePermissionsFromFile } = require("../services/permissionUtils")

const getAllEmployees = async () => {
  return new Promise((resolve, reject) => {
    Employee.find({}, async (err, employees) => {
      if (err) {
        reject(err);
        } else {
          resolve(employees);
        }
    });
  });
};

const getEmployeeByID = (id) => {
  return new Promise((resolve, reject) => {
    Employee.findById(id, (err, employee) => {
      if (err) {
        reject(err);
      } else {
        resolve(employee);
      }
    });
  });
};

const addEmployee = (newEmployee) => {
  return new Promise(async (resolve, reject) => {
    const employee = new Employee(newEmployee);
    employee.save((err) => {
      if (err) {
        reject(err);
      } else {
        try {
          addEmployeeToFile(newEmployee);
        } catch (error) {
          console.log(error);
        }
        try {
          addPermissionsToFile(newEmployee);
        } catch (error) {
          console.log(error);
        }
        resolve(employee);
      }
    });
  });
};

const editEmployee = (id, updatedEmployee) => {
  return new Promise(async (resolve, reject) => {
    Employee.findByIdAndUpdate(id, updatedEmployee, (err) => {
      if (err) {
        reject(err);
      } else {
        try {
          editEmployeeInFile(id, updatedEmployee);
        } catch (error) {
          console.log(error);
        }
        try {
          editPermissionsInFile(id, updatedEmployee);
        } catch (error) {
          console.log(error);
        }
        resolve("Employee updated successfully");
      }
    });
  });
};

const deleteEmployee = (id) => {
  return new Promise((resolve, reject) => {
    Employee.findByIdAndDelete(id, (err) => {
      if (err) {
        reject(err);
      } else {
        try {
          removeEmployeeFromFile(id);
        } catch (error) {
          console.log(error);
        }
        try {
          removePermissionsFromFile(id);
        } catch (error) {
          console.log(error);
        }
        resolve("Employee deleted successfully");
      }
    });
  });
};

module.exports = {
  getAllEmployees,
  getEmployeeByID,
  addEmployee,
  editEmployee,
  deleteEmployee,
};
