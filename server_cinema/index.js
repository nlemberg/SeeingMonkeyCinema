const express = require("express");
const cors = require("cors");
const connectEmployeeLoginDB = require("./configs/db");
const createAdmin = require("./services/createAdmin");

const employeeLoginController = require("./controllers/employeeLoginController");
const subscriptionController = require("../server/controllers/subscriptionController");
const employeeController = require("./controllers/employeeController")
const permissionController = require("./controllers/permissionController")


const app = express();
const port = 8001;

connectEmployeeLoginDB();

createAdmin();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/employeeLogins", employeeLoginController);
app.use("/employees", employeeController);
app.use("/subscriptions", subscriptionController);
app.use("/permissions", permissionController);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
})