const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://user1:pys0GUQN5U34P0Rj@cluster0.es8q3.mongodb.net/Nightclub?retryWrites=true&w=majority"
    )
    .then(() => console.log("Database Connection has been establsied."))
    .catch((err) => console.log("there was an error", err));
