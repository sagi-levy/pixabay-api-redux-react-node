const express = require("express");
const imagesRouter = require("./routes/images");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use("/images", imagesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
