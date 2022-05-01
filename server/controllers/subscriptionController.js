const express = require("express");
const {
  getAllSubscriptions,
  getSubscriptionById,
  deleteSubscription,
} = require("../services/subscriptionServices");

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const subscriptions = await getAllSubscriptions();
    return res.json(subscriptions);
  } catch (error) {
    return res.json(error);
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const id = req.params.id;
    const subscription = await getSubscriptionById(id);
    return res.json(subscription);
  } catch (error) {
    return res.json(error);
  }
});

router.route("/:id").delete(async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteSubscription(id);
    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
