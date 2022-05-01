const axios = require("axios");

const membersURL = "https://jsonplaceholder.typicode.com/users";
const moviesURL = "https://api.tvmaze.com/shows";

const populateMembersDB = async () => {
  let { data: members } = await axios.get("http://localhost:8000/members");
  if (members.length === 0) {
    const { data: response } = await axios.get(membersURL);
    members = response.map(async (member) => {
      try {
        await axios.post("http://localhost:8000/members", member);
      } catch (error) {
        console.log(error);
      }
    });
  }
};

const populateMoviesDB = async () => {
  let { data: movies } = await axios.get("http://localhost:8000/movies");
  if (movies.length === 0) {
    const { data: response } = await axios.get(moviesURL);
    movies = response.map(async (movie) => {
      try {
        await axios.post("http://localhost:8000/movies", movie);
      } catch (error) {
        console.log(error);
      }
    });
  }
};

module.exports = { populateMembersDB, populateMoviesDB };
