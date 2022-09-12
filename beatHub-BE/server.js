const express = require("express");
const cors = require("cors");
const threadRoute = require("./routes/threadRoute")
const PORT = process.env.PORT || 8070;
const app = express();
const mongoose = require("mongoose");


require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/thread", threadRoute);


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => {
    console.log(err.message);
  });


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
