const mongoose = require("mongoose")
const Subscription = require("../models/subscriptionsModel");

const getAllSubscriptions = () => {
  return new Promise((resolve, reject) => {
    Subscription.find({}, (err, subscriptions) => {
      if (err) {
        reject(err);
      } else {
        resolve(subscriptions);
      }
    });
  });
};

const getSubscriptionById = (id) => {
  return new Promise((resolve, reject) => {
    Subscription.findById(id, (err, subscription) => {
      if (err) {
        reject(err);
      } else {
        resolve(subscription);
      }
    });
  });
};

const findSubscriptionByMemberID = (memberID) => {
  return new Promise((resolve, reject) => {
    Subscription.findOne({ memberID: memberID }, (err, subscription) => {
      if (err) {
        reject(err)
      } else {
        resolve(subscription)
      }
    })
  })
}

const addOrEditSubscription = (memberID, movieObj) => {
  return new Promise( async (resolve, reject) => {
    const subscription = await findSubscriptionByMemberID(memberID)
    if (subscription) {
      const updatedSubscription = {
          memberID: memberID,
          moviesWatched: [...subscription.moviesWatched, movieObj]
        };
            
      Subscription.findByIdAndUpdate(subscription._id, updatedSubscription, (err) => {
            if (err) {
              console.log(err);
            } else {
              resolve("Movie was successfully added to subscription");
            }
          })
          
      } else {
        
          const newSubscription = new Subscription({
            memberID: memberID,
            moviesWatched: [movieObj]
          })

          newSubscription.save((err) => {
            if (err) {
              reject(err);
            } else {
              resolve("New subscription added!");
            }
          })
        }})}

const deleteMovieFromSubscriptions = (movieID) => {
  return new Promise( async (resolve, reject) => {
    const allSubscriptions = await getAllSubscriptions();
    allSubscriptions.map(subscription => {
      const updatedMovies = subscription.moviesWatched.filter(movie => movie.movieID.toString() !== movieID);
      const updatedSubscription = {
        memberID: subscription.memberID,
        moviesWatched: updatedMovies
      };
      Subscription.findByIdAndUpdate(subscription._id, updatedSubscription, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Movie deleted from all relevant subscriptions");
        }
      })
    })
  })
}

const deleteSubscription = (memberId) => {
  return new Promise(async (resolve, reject) => {
    const subscription = await findSubscriptionByMemberID(memberId)
    if (subscription) {
      Subscription.findByIdAndDelete(subscription._id, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Subscription Deleted successfully");
        }
      });
    }
  });
};

module.exports = {
  getAllSubscriptions,
  getSubscriptionById,
  findSubscriptionByMemberID,
  addOrEditSubscription,
  deleteMovieFromSubscriptions,
  deleteSubscription,
};
