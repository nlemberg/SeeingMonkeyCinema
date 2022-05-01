const express = require("express");
const { getPermissionFile } = require("../services/permissionUtils")

const router = express.Router();

router.route("/").get(async (req, res) => {
    try {
      const permissions = await getPermissionFile();
      return res.json(permissions);
    } catch (error) {
      return res.json(error);
    }
  });
 
  module.exports = router;