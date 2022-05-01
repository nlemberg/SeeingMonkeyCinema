const Member = require("../models/membersModel");
const { deleteSubscription } = require("./subscriptionServices");


const getAllMembers = async () => {
  return new Promise((resolve, reject) => {
    Member.find({}, async (err, members) => {
      if (err) {
        reject(err);
      } else {
          resolve(members);
      }
    });
  });
};

const getMemberByID = (id) => {
  return new Promise((resolve, reject) => {
    Member.findById(id, (err, member) => {
      if (err) {
        reject(err);
      } else {
        resolve(member);
      }
    });
  });
};

const addMember = (newMember) => {
  return new Promise((resolve, reject) => {
    const member = new Member(newMember);
    member.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Member added successfully");
      }
    });
  });
};

const editMember = (id, updatedMember) => {
  return new Promise((resolve, reject) => {
    Member.findByIdAndUpdate(id, updatedMember, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Member updated successfully");
      }
    });
  });
};

const deleteMember = (id) => {
  return new Promise((resolve, reject) => {
    Member.findByIdAndDelete(id, (err) => {
      if (err) {
        reject(err);
      } else {
        try {
          deleteSubscription(id)
        } catch (error) {
          console.log(error);
        }
        resolve("Member deleted successfully");
      }
    });
  });
};

module.exports = {
  getAllMembers,
  getMemberByID,
  addMember,
  editMember,
  deleteMember,
};
