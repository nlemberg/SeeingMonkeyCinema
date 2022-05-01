const express = require("express");
const { getEmployeeFile } = require("../services/employeeUtils")

const router = express.Router();

router.route("/").get(async (req, res) => {
    try {
      const employees = await getEmployeeFile();
      return res.json(employees);
    } catch (error) {
      return res.json(error);
    }
  });
 
  module.exports = router;