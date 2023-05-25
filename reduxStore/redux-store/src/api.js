import axios from "axios";

export const fetchPhotos = async (category) => {
  const url = `http://localhost:3001/images/${category}`;
  const response = await axios.get(url);
  return response.data;
};
