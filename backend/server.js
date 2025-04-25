const express = require("express");
const mongoose = require("mongoose");
const contactRoute = require("./routes/contact");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoute);

// MongoDB Atlas connection
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
