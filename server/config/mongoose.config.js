const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/nightclubMetaverse")
    .then(() => console.log("Database Connection has been establsied."))
    .catch((err) => console.log("there was an error", err));
