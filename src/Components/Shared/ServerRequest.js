import axios from "axios";

export const GetMenu = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response ? error.response.status : 503));
  });
};
