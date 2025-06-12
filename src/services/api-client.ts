import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a388d70baafe4f739ba5c6c9e04b43fa",
  },
});
