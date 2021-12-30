import axios from "axios";

export default axios.create({
  baseURL: `http://api-desktop.seeding.live/api/v1`,
  headers: {
    "Content-Type": "application/json"
  }
});
