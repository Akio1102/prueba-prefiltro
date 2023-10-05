import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9516/api/",
});

export default instance;
