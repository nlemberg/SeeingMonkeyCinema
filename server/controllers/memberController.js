const express = require("express");
const mongoose = require("mongoose");
const { getAllMembers, getMemberByID, addMember, editMember, deleteMember } = require("../services/memberServices");
const { findSubscriptionByMemberID, addOrEditSubscription } = require("../services/subscriptionServices")
const axios = require("axios");


const router = express.Router();

const populateDB = async () => {
  const {data: fetchedMembers} = await axios.get("https://jsonplaceholder.typicode.com/users");
  const membersFromApi = fetchedMembers.map(async (member) => {
    const {data: newMember} = await axios.post("http://localhost:8000/members", member);
    return newMember;
  })
  return membersFromApi;
}


router.route("/").get(async (req, res) => {
  try {
    const members = await getAllMembers();
    return res.json(members);
  } catch (error) {
    return res.json(error);
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const id = req.params.id;
    const member = await getMemberByID(id);
    return res.json(member);
  } catch (error) {
    return res.json(error);
  }
});

// get subscription by member ID
router.route("/:id").get(async (req, res) => {
  try {
    const memberID = mongoose.Types.ObjectId(req.params.id);
    const subscription = await findSubscriptionByMemberID(memberID);
    return res.json(subscription);
  } catch (error) {
    return res.json(error);
  }
})

// create new subscription for member, or add movie to existing subscription
router.route("/:id").post(async (req, res) => {
  try {
    const memberID = req.params.id //mongoose.Types.ObjectId(req.params.id);
    const movieObj = req.body
    const subscription = await addOrEditSubscription(memberID, movieObj);
    return res.json(subscription);
  } catch (error) {
    return res.json(error);
  }
})


router.route("/").post(async (req, res) => {
  try {
    const member = req.body;
    const result = await addMember(member);
    return res.json(result);
  } catch (error) {
    res.json(error);
  }
});

router.route("/:id").put(async (req, res) => {
  try {
    const id = req.params.id;
    const member = req.body;
    const result = await editMember(id, member);
    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
});

router.route("/:id").delete(async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteMember(id);
    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
