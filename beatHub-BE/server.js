const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8070;
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");


require("dotenv").config();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/users", userRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => {
    console.log(err.message);
  });


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
