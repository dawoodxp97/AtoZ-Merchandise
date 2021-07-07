import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-atoz-app-248e5.cloudfunctions.net/api" ,
  // For Debugging Only
  // "http://localhost:5001/atoz-app-248e5/us-central1/api"
});
export default instance;
