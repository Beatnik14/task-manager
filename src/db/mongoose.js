const mongoose = require("mongoose");

const connectionUrl = "mongodb://127.0.0.1:27017/task-manager-api";

mongoose.connect(connectionUrl);

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const me = new User({ name: "Saba", age: 22 });

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log("Error", error);
  });
