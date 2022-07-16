const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.route");
const cookieParser = require("cookie-parser");
require("./config/mongoose.config");
const { Socket } = require("./controllers/socket");

const app = express();

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.use(userRoutes);

const server = app.listen(8000, () => console.log("server is running..."));

Socket(server);
