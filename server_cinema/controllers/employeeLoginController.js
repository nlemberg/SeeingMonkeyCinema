const express = require("express");
const { getAllEmployees, getEmployeeByID, addEmployee, editEmployee, deleteEmployee } = require("../services/employeeLoginServices")

const router = express.Router();

router.route("/").get(async (req, res) => {
    try {
      const employees = await getAllEmployees();
      return res.json(employees);
    } catch (error) {
      return res.json(error);
    }
  });
  
  router.route("/:id").get(async (req, res) => {
    try {
      const id = req.params.id;
      const employee = await getEmployeeByID(id);
      return res.json(employee);
    } catch (error) {
      return res.json(error);
    }
  });
  
  router.route("/").post(async (req, res) => {
    try {
      const employee = req.body;
      const result = await addEmployee(employee);
      return res.json(result);
    } catch (error) {
      res.json(error);
    }
  });
  
  router.route("/:id").put(async (req, res) => {
    try {
      const id = req.params.id;
      const employee = req.body;
      const result = await editEmployee(id, employee);
      return res.json(result);
    } catch (error) {
      return res.json(error);
    }
  });
  
  router.route("/:id").delete(async (req, res) => {
    try {
      const id = req.params.id;
      const result = await deleteEmployee(id);
      return res.json(result);
    } catch (error) {
      return res.json(error);
    }
  });
  
  module.exports = router;