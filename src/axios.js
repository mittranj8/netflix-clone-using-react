import axios from "axios";

// making requests to movie datatbase using baseURL
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
