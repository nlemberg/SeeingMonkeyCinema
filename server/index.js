const express = require("express");
const cors = require("cors");
const connectSubscriptionsDB = require("./dbs/DB");
const memberController = require("./controllers/memberController");
const movieController = require("./controllers/movieController");
const subscriptionController = require("./controllers/subscriptionController");
const { populateMembersDB, populateMoviesDB } = require("./services/utils") 

const app = express();
const port = 8000;

connectSubscriptionsDB();

populateMembersDB();
populateMoviesDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/members", memberController);
app.use("/movies", movieController);
app.use("/subscriptions", subscriptionController);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})
