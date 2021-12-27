const mongoose = require("mongoose");
const validator = require("validator");

const connectionUrl = "mongodb://127.0.0.1:27017/task-manager-api";
mongoose.connect(connectionUrl);

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
  },
  email: {
    type: String,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Please provide valid email");
      }
    },
  },
});

const node = new Task({
  description: "Study node",
  completed: false,
  email: "sabatevdorashvili99@gmail.com",
});

// node
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Please provide valid email");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be greater than zero");
      }
    },
  },
});

const me = new User({
  name: "Saba",
  email: "SABATEVDORASHVILI99@gmail.com",
  age: 22,
});

me.save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
