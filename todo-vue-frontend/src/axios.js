import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:44377/api",
  headers: { "Content-Type": "application/json" },
});
