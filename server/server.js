const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.route");

require("./config/mongoose.config");

const app = express();

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

app.use(userRoutes);

app.listen(8000, () => console.log("server is running..."));
