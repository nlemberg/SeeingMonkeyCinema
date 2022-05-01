const axios = require("axios");
const { addEmployeeToFile } = require("./employeeUtils");
const { addPermissionsToFile } = require("./permissionUtils");
const { addEmployee } = require("./employeeLoginServices")

const employeeLoginDB = "http://localhost:8001/employeeLogins";

const createAdmin = async () => {
  const { data: employees } = await axios.get(employeeLoginDB);
  if (employees.length === 0) {  
    try {
      const admin = { 
        userName: "Admin", 
        password: "yasQueen",
        firstName: "Admin",
        lastName: "Admin",
        permissions: {
          viewSubscriptions: true,
          createSubscriptions: true,
          updateSubscriptions: true,
          deleteSubscriptions: true,
          viewMovies: true,
          createMovies: true,
          updateMovies: true,
          deleteMovies: true,
        }
      };
      await axios.post(employeeLoginDB, admin);
      console.log("Admin created successfully");
    } catch (error) {
      console.log(error);
    }    
  }
};

module.exports = createAdmin;
