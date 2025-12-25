const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/users");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", usersRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5012");
});
