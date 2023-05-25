const express = require("express");
const router = express.Router();
const axios = require("axios");
const API_BASE_URL = "https://pixabay.com/api";
const API_KEY = "25540812-faf2b76d586c1787d2dd02736";

router.get("/:category", async (req, res) => {
  const { category } = req.params;

  try {
    const url = `${API_BASE_URL}/?key=${API_KEY}&q=${category}`;
    console.log(url);

    const response = await axios.get(url);
    const images = response.data;
    res.json(images.hits);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

module.exports = router;
