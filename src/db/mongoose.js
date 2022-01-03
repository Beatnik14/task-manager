const mongoose = require("mongoose");

const connectionUrl = "mongodb://127.0.0.1:27017/task-manager-api";
mongoose.connect(connectionUrl);

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

