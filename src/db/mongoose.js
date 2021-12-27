const mongoose = require("mongoose");

const connectionUrl = "mongodb://127.0.0.1:27017/task-manager-api";
mongoose.connect(connectionUrl);

const Task = mongoose.model("Task", {
  description: {type:String},
  completed: {type: Boolean}
})

const node = new Task({description:"Study Node", completed: false});

node.save().then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)
})
